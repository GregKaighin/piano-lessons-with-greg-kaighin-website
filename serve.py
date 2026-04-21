"""Local dev server with HTTP Range request support (required for audio seeking)."""
import http.server
import os
import sys

class RangeHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def send_head(self):
        path = self.translate_path(self.path)
        range_header = self.headers.get('Range')

        if not range_header or not os.path.isfile(path):
            return super().send_head()

        try:
            f = open(path, 'rb')
        except OSError:
            self.send_error(404, "File not found")
            return None

        file_size = os.path.getsize(path)
        range_str = range_header.strip().replace('bytes=', '')
        start_str, end_str = range_str.split('-')
        start = int(start_str)
        end = int(end_str) if end_str else file_size - 1
        end = min(end, file_size - 1)

        if start > end or start >= file_size:
            self.send_error(416, "Range Not Satisfiable")
            f.close()
            return None

        self.send_response(206)
        self.send_header('Content-Type', self.guess_type(path))
        self.send_header('Content-Range', f'bytes {start}-{end}/{file_size}')
        self.send_header('Content-Length', str(end - start + 1))
        self.send_header('Accept-Ranges', 'bytes')
        self.end_headers()
        f.seek(start)
        return f

    def copyfile(self, source, outputfile):
        range_header = self.headers.get('Range')
        if range_header and os.path.isfile(self.translate_path(self.path)):
            end_str = range_header.strip().replace('bytes=', '').split('-')[1]
            file_size = os.path.getsize(self.translate_path(self.path))
            end = int(end_str) if end_str else file_size - 1
            length = end - source.tell() + 1
            self.wfile.write(source.read(length))
            source.close()
        else:
            super().copyfile(source, outputfile)

    def log_message(self, format, *args):
        pass  # suppress request logs

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    print(f'Serving at http://localhost:{port}')
    http.server.test(HandlerClass=RangeHTTPRequestHandler, port=port, bind='localhost')

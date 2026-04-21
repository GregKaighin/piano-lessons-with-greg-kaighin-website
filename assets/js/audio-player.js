const listAudio = [
    { name: "Bagatelle 'Fur Elise', Beethoven",       file: "assets/music/bagatelle-fur-elise.mp3",   duration: "02:25" },
    { name: "Prelude in C# Minor, Rachmaninoff",       file: "assets/music/prelude-c-sharp-minor.mp3", duration: "04:13" },
    { name: "Waltz in F Minor, Chopin",                file: "assets/music/waltz-f-minor.mp3",         duration: "02:32" },
    { name: "Pick Up the Pieces, Average White Band",  file: "assets/music/pick-up-the-pieces.mp3",    duration: "04:02" },
    { name: "The Entertainer, Joplin",                 file: "assets/music/the-entertainer.mp3",       duration: "04:03" },
];

const audio       = document.getElementById('myAudio');
const sourceAudio = document.getElementById('source-audio');
const timer       = document.querySelector('.timer');
const titleEl     = document.querySelector('.title');
const seekBar     = document.getElementById('seek-bar');

let indexAudio = 0;
let isSeeking  = false;

listAudio.forEach(function (track, i) {
    const item = document.createElement('div');
    item.className     = 'playlist-track-ctn';
    item.id            = 'ptc-' + i;
    item.dataset.index = i;
    item.innerHTML =
        '<div class="playlist-btn-play"><i class="fas fa-play" id="p-img-' + i + '"></i></div>' +
        '<div class="playlist-info-track">' + track.name + '</div>' +
        '<div class="playlist-duration">' + track.duration + '</div>';
    item.addEventListener('click', function () {
        const clicked = parseInt(this.dataset.index);
        clicked === indexAudio ? toggleAudio() : loadTrack(clicked);
    });
    document.querySelector('.playlist-ctn').appendChild(item);
});

function loadTrack(index) {
    setTrackIcon(indexAudio, false);
    document.getElementById('ptc-' + indexAudio).classList.remove('active-track');
    indexAudio      = index;
    sourceAudio.src = listAudio[index].file;
    titleEl.innerHTML = listAudio[index].name;
    seekBar.value   = 0;
    audio.load();
    audio.play().catch(function () {});
    document.getElementById('ptc-' + indexAudio).classList.add('active-track');
    setPlayState(true);
}

function toggleAudio() {
    if (audio.paused) {
        audio.play().catch(function () {});
        document.getElementById('ptc-' + indexAudio).classList.add('active-track');
        setPlayState(true);
    } else {
        audio.pause();
        setPlayState(false);
    }
}

function setPlayState(playing) {
    document.getElementById('icon-play').style.display  = playing ? 'none'  : 'block';
    document.getElementById('icon-pause').style.display = playing ? 'block' : 'none';
    setTrackIcon(indexAudio, playing);
}

function setTrackIcon(index, playing) {
    const el = document.getElementById('p-img-' + index);
    el.classList.toggle('fa-pause',  playing);
    el.classList.toggle('fa-play',  !playing);
}

function formatTime(t) {
    return String(Math.floor(t / 60)).padStart(2, '0') + ':' + String(Math.floor(t % 60)).padStart(2, '0');
}

function onTimeUpdate() {
    timer.innerHTML = formatTime(audio.currentTime);
    if (!isSeeking && isFinite(audio.duration) && audio.duration > 0) {
        seekBar.value = (audio.currentTime / audio.duration) * 1000;
    }
    if (audio.ended) {
        setPlayState(false);
        if (indexAudio < listAudio.length - 1) loadTrack(indexAudio + 1);
    }
}

function next()     { if (indexAudio < listAudio.length - 1) loadTrack(indexAudio + 1); }
function previous() { if (indexAudio > 0)                    loadTrack(indexAudio - 1); }

function toggleMute() {
    audio.muted = !audio.muted;
    document.getElementById('icon-vol-up').style.display   = audio.muted ? 'none'  : 'block';
    document.getElementById('icon-vol-mute').style.display = audio.muted ? 'block' : 'none';
}

seekBar.addEventListener('mousedown', function () { isSeeking = true; });
seekBar.addEventListener('touchstart', function () { isSeeking = true; }, { passive: true });
seekBar.addEventListener('change', function () {
    if (isFinite(audio.duration) && audio.duration > 0) {
        audio.currentTime = (this.value / 1000) * audio.duration;
    }
    isSeeking = false;
});

sourceAudio.src   = listAudio[0].file;
titleEl.innerHTML = listAudio[0].name;
audio.load();

#!/usr/bin/env python3
from jinja2 import Environment, FileSystemLoader
from datetime import datetime
import os

year = datetime.now().year

env = Environment(loader=FileSystemLoader('templates'))

pages = [
    {
        'template': 'index.html',
        'output': 'index.html',
        'title': 'Piano Lessons with Greg Kaighin | Home',
        'overlay_class': 'overlay-shape-1',
        'overlay_heading': 'Learn to play',
        'overlay_text': 'Bedfordshire area and online',
    },
    {
        'template': 'music.html',
        'output': 'music.html',
        'title': 'Piano Lessons with Greg Kaighin | Music',
        'overlay_class': 'overlay-shape-2',
        'overlay_heading': 'Take a Listen',
        'overlay_text': 'Please enjoy',
    },
    {
        'template': 'resources.html',
        'output': 'resources.html',
        'title': 'Piano Lessons with Greg Kaighin | Resources',
        'overlay_class': 'overlay-shape-3',
        'overlay_heading': 'Sheet music',
        'overlay_text': 'and website links',
    },
    {
        'template': 'enquiries.html',
        'output': 'enquiries.html',
        'title': 'Piano Lessons with Greg Kaighin | Enquiries',
        'overlay_class': 'overlay-shape-4',
        'overlay_heading': 'Interested in lessons?',
        'overlay_text': 'Get in contact',
    },
]

for page in pages:
    template = env.get_template(page['template'])
    output = template.render(year=year, **page)
    with open(page['output'], 'w', encoding='utf-8') as f:
        f.write(output)
    print(f"Built {page['output']}")

print('Done!')

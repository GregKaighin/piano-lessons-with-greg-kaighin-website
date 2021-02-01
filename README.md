Gregory Kaighin
Full Stack Developer HND Course
Milestone Project 1
February 2021

Piano Lessons with Greg Kaighin website.

This website is for a real-world application, my own piano teaching business, to help increase the number of students
I currently have. It's purposes are:

-to help attract new customers and provide them with a means of getting in contact.
-to raise awareness of the business among the general public, both online and locally.
-to provide an juke-box type audio player to showcase some music from myself and my students.
-to provide file downloads of content directly related to piano teaching.
-to provide links to relevant external websites, such as music examining boards.

Based on user scenarios, and feedback from existing students and friends and family, the website is built with a 
mobile-first design philosophy, but it is responsive enough to look acceptable on large displays too, particularly
the resources page, where a user is considered to be more likley to acess the site using a laptop or desktop computer.

The layout of the 'ethos' section is based on the 'Love Running' website from Code Institute's Full Stack Developer programme.

Two previous builds of the website can be found here #############, both of which consist of a lot of commit 
messages of varying clarity, as I learned how to build a website, and use GitHub. The third and final build 
presented here is put together more logically in sections and with clearer commit messages.



The enquiries form is not yet functional.

Languages used:
HTML5
CSS3
JavaScript (for audio player)
Frameworks:
Bootstrap 4.1.3
Font Awesome for icons
jspopper for scroll effects

Validation:
HTML - 
CSS - https://jigsaw.w3.org/css-validator/ - No Errors Found

Hero image: Shutterstock
Card Images: Pexels

Original Content:
MP3 Audio recordings: Greg Kaighin
PDF Documents: Greg Kaighin

Colours: Generated with https://color.adobe.com/create/color-wheel to match the hero image displayed at the top of index.html,
and to ellicit the main colours found on a standard grand piano (ebony, ivory, black, brass, red felt)

Audio player: https://codepen.io/craigstroman/pen/aOyRYx

Target Audience
-Internet users who might be considering taking piano lessons.
-Current piano students

Primary features-
-To give a clear, concise and aesthetically pleasing presentation of the business, “Piano Lessons with Greg Kaighin”.
-To provide a means for potential customers to get in contact.

Secondary features-
-Audio playback of music files.
-Download of sheet music PDFs.
-Links to external websites.

Roadmap features
Signup and payments page for group music workshops.
Automatic student waiting list, which can be easily activated/deactivated as required.
Improvements to the opacity effect around the hero image.
Additional content for music.html and resources.html pages. MP3 audio and PDF document files.


Known issues and potential solutions-
-Issue: navbar dropdown menu always appears on the left side. It would sometimes look better positioned on the right.
Potential solution: Change index.html navbar-toggler class IDs.

-Issue: Audio player progress bar does not behave as expected.
Potential solution: JavaScript fix.

-Issue: Show more / Show less button on index.html page collapses downwards. An upwards collapse (expand?) would provide better UX and
flow.
Potential solution: jspopper? I need to learn how to do this.

-Issue: Make the "About Me" section have the same opacity as the navbar. This will improve the overall look of the hero image
and "open it up" a little.
Potential solution: JavaScript? I need to learn how to do this.


Audio player-
-The audio player used in this website was created by Craig Stroman https://codepen.io/craigstroman/pen/aOyRYx.
I have used this player because the standard HTML/CSS audio player does not provide enough funcionality, specifically it does not provide
a way to have a playlist and a single set of controls for playback, at least not that I have been able to figure out.
I chose to use this player because it has a simple, clear UI, the code looks well-written, and it performs it's function well.
The audio player functions as expected, apart from the progress bar slider does not work. This is not ideal, but is a better compromise
than simply using the HTML audio element

User Stories

As a visitor to Piano Lessons with Greg Kaighin I expect/want/need:

1. To be able to navigate the website easily and quickly find the information I am looking for.
2. To get relevant information about Greg Kaighin the piano teacher.
3. To get information to help me decide if Greg Kaighin is the right piano teacher for me. 
2. For all information to be presented clearly and logically.
3. To be able to make contact easily if I decide I want to.
4. To be able to download sheet music for my piano lessons.
5. To get information about music exams.
6. To listen to some piano music.
7. The website to have a coherent look.
8. Everything to work.



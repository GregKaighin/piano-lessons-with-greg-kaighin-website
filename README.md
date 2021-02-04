# Greg Kaighin
## Full Stack Developer HND Course
## Code Institute
### Milestone Project 1
### February 2021

# Piano Lessons with Greg Kaighin Website

This website is built to meet the requirements of my self-employed piano-teaching business
"Piano Lessons with Greg Kaighin", and has been designed with the 

## Its purposes are:

- to advertise the business to potential customers and provide them with a means of getting in contact.

- to raise awareness of the business among the general public, both online and locally.

- to collect contact and other relevant information from prospective customers via a form.

- to provide a juke-box type audio player to showcase some music from myself and my students.

- to provide PDF downloads to content related to piano teaching.

- to provide links to useful external websites, such as music examining boards.

Based on user scenarios, and feedback from existing students and friends and family, the website is built with a mobile-first design philosophy, but it is responsive enough to look acceptable on large displays too, particularly the resources page, where, based on user-scenarios, a user is considered to be more likely to access the site using a laptop or desktop computer.

The layout of the 'ethos' section is based on the 'Love Running' website from Code Institute's Full Stack Developer programme, but reworked using Bootstraps layout features.

Two previous builds of the website can be found here #############, both of which consist of a lot of commit messages of varying clarity, as I learned how to build a website, and to use GitHub. The third and final build presented here is put together more logically in sections and with clearer commit messages.

The enquiries form is not yet functional.

All other parts of the website are working as intended.

## Technologies Used:
- HTML5
- CSS3
- Font Awesome
- Bootstrap 4.1.3
- js popper
- JavaScript (for audio player and track info popovers only)
- Adobe Photoshop

### Validation:
- HTML -
- CSS - https://jigsaw.w3.org/css-validator/ - No Errors Found / ## Warnings

### Original Content:
MP3 Audio recordings: Greg Kaighin
PDF Documents: Greg Kaighin
Care has been taken to ensure all sheet music and music recordings chosen are free of copyright restrictions.

Colours: Gradient fills on piano keys image generated with Photoshop. The colour scheme was chosen to give an ‘educational’ aesthetic to the website, and features pastel-coloured gradients surrounded by solid 2-pixel borders. 

Audio player: https://codepen.io/craigstroman/pen/aOyRYx

### Target Audience

- Internet users who might be considering taking piano lessons.
- Current piano students

## Features

### Primary

- Give a concise and aesthetically pleasing presentation of the business “Piano Lessons with Greg Kaighin”.
- Provide a way for potential customers to get in contact.

### Secondary

- Audio playback of music files.
- Download of sheet music PDFs.
- Links to external websites.

## Roadmap features

- Signup and payments page for group music workshops.

- Automatic student waiting list, which can be easily activated/deactivated as required and which lets potential customers know how many people are already on the list.

- The header message will be updated as required to reflect current business circumstances.

## Known issues and potential solutions
- Issue: navbar dropdown menu always appears on the left side. It would sometimes look better positioned on the right.
Potential solution: Change index.html navbar-toggler class IDs.

- Issue: Audio player progress bar does not behave as expected.
Potential solution: JavaScript fix.

- Issue: Show more / Show less button on index.html page collapses downwards. An upwards collapse (expand?) would provide better UX and
flow.
Potential solution: jspopper? I need to learn how to do this.

- Issue: Make the "About Me" section have the same opacity as the navbar. This will improve the overall look of the hero image
and "open it up" a little.
Potential solution: JavaScript? I need to learn how to do this.



## Audio player

- The audio player used in this website was created by Craig Stroman https://codepen.io/craigstroman/pen/aOyRYx.
I have used this player because the standard HTML/CSS audio player does not provide enough functionality, specifically it does not provide a way to have a playlist and a single set of controls for playback, at least not that I have been able to figure out.
I chose this player because it has a simple, clear UI, it functions mainly as expected, and the code looks well-written to my, admittedly untrained eye.
All functions apart from the progress bar slider work, so I have stripped the code out relating to the progress slider. Fortunately, this does not appear to have broken anything, and improves UX of the audio player by giving a cleaner look without a non-functioning progress slider, or symbols that appeared as the audio player was fetching information about track-length. This is not ideal, but is a better compromise than simply using the HTML audio element, particularly from the user’s perspective as they are presented with a simple audio-player that functions as intended. 
I will look again at the audio player once I have learned more about JavaScript to understand more about how it works.

## User Stories

As a visitor to Piano Lessons with Greg Kaighin I expect/want/need:

1. To be able to navigate the website easily and to quickly find the information I am looking for.

2. To get relevant information about GK the piano teacher.

3. To get information to help me decide if GK is the right piano teacher for me. 

2. For all information to be presented clearly and logically.

3. To be able to make contact easily if I decide I want to.

4. To be able to download sheet music for my piano lessons.

5. To get information about music exams.

6. To be able to access the website on my phone, tablet and computer.

7. To listen to some piano music.

8. For the website to have a coherent look.

9. For everything to work.

## Design Choices

The overall visual style came together quite late in the project after several unsuccessful attempts at using images of paintings. I felt that they looked fine on a laptop, however they didn't scale down to small viewports very well, and also seemed to dominate the look of the website.

These were replaced with a simpler image of piano keyboard outline, to which colour-gradients have been applied to fill the piano keys. This image, couple with a few areas of colour around the page give a hopefully much bolder, cleaner and more appealing look. I was deliberately wary of not designing the website around an image, but once I had decided to use the coloured piano keyboard, other design choices such as icon colours and colour in other areas of the page became more obvious.
- The background colour is ivory, of course, and the dark colour of the text is chosen to match the black keys on a piano.

- The "black" keys in the main jumbotron image have been coloured dark blue, as they looked too dark on screen when completely black.

- The font is Karla, from Google fonts. I chose this because it is clear and easy to read.

- After adding the coloured piano image, I found that by enclosing areas in solid borders gave a nice clean look against the background and helped to make the overall look more coherent to the eye.

- The links to other webpages on the resources page are dark blue, as are the PDF file download links.

- The internal links in the about me section are coloured BGY to match the navigation icons.

- The social link buttons are displayed in their original brand colours to stand out a little.

- For page navigation, a simple RGBY colour is given to the navigation icons. The order of the colours here matches the order of the colours on the piano keyboard image.

- The buttons are silver-grey, to make them noticeable but not intrusive, flashing pink when pressed to provide feedback to the user.

- The overlay shapes displayed over the piano keyboard image on each page matches the RGBY theme of the corresponding navigation icons, and this theme is extended through some of the elements throughout.

- The audio player on the Music page has a simple UI, with intuitive controls. Green borders are applied to the buttons to tie the player into the colour scheme used in the navbar icons.

- The Resources section information is presented using Bootstrap's .table-striped and .table-light classes.

- Bootstrap layout classes are applied to the elements in order to achieve page designs that are responsive.

- Overall, I am happy with the design and layout at small and medium screen sizes, and I think it looks best at these sizes.

- I am not completely happy with the layout at large screen sizes as I feel there is too much white
space visible on-screen. In future I may add in more elements that appear at the screen edges on large screens.

## Credits

- Thanks to Oluwafemi Medale for all of the expert advice he gave during my mentoring sessions with him, and to all the tutors who put together such an engaging and interesting course.
- Hero image: Shutterstock
- Card Images: Pexels



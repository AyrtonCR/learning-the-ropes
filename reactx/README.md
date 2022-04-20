# learning-the-ropes

## Website Rebuild Project

---

## Project Overview

To rebuild the Dementia Canterbury Website from scratch using as little reference to their source code as possible. While in the process of doing this I want to identify areas of the original website that could have been done better and make small design improvements. The purpose is to practice a start to finish process of rolling out an app using React.js. I will make comments on things I notice we have done differently and compare the code from the original site after making two pages.

Original Site: [https://www.dementiacanterbury.org.nz/]

---

Current Re-work: [https://i-like-chicken.netlify.app/]

<br>

## Steps to take to build site

1. Identify and create core files with standard file names
2. Add basic layout to some files and prepare to work on index.html
3. Add as much of the html layout as possible using JS React
4. Create a photo database with ripped photos from the current site
5. Break apart index.html into components and modules
6. Start building the individual components to add to main later
7. Add components to main App.js
8. Run App

<br>

## Part 1: Index (Home Page)

- Header (logo pic, contact, form, donate, number and email)(broken + and - icons located at top right corner)
- Nav bar (seven dropdown menus)
- Slideshow (three images with different buttons overlapped for different images)(image scaling problem identified)
- Triple Grid / Grid Boxes (grid area with up to 3 grids, box with button)
- Blurb with mini blurb beside it and image of NZ beside that (scaling issue for this part identified in original)
- Footer ((LTR - logo pics, semi form layout with contact information, menu (that does not look clickable in original), and two buttons on right)

<br>

---

<br>

## Part 2: Supporters Page (Using Begin and Stripe API to import Image Grid)

- Header (re-use)
- Nav bar (re-use)
- Image grid (large multi image grid that displays logos)
- Footer (re-use)

<br>

---

## Part 3:

---

<br>

<br>

## Problems found with the original website

<br>

1.  Noticed there is an issue when the page is going from mobile to mid screen view that logo image stays locked to the left when the rest of the elements scale with the page. It should stay centered.

2.  Icons are broken in the top right corner (A+ A-), link does nothing.

3.  Scaling issue found when rescaling the page (blurb, mini blurb, nz picture), overlapping image with text and half of image is not being displayed properly.

4.  Overlapping buttons on the slideshow look bad.

5.  Text in header doesn't match up with other header grid elements in mobile view.

6.  Small bug found when slowly changing sizes from mobile where contact, referral, donate buttons squish.

7.  Part of image in the three photo slideshow wont display properly when scaling the webpage, a lot of it runs off the page, might be tricky to fix).

8.  Nav bar only displays in 50% + screen size.

9.  Grid runs off page for the grid with three blocks of content beneath the slideshow on mobile view.

10. "Desktop Version Only" text found in original footer

11. Donate and Referral Form buttons in the footer run off the page just as it scales to larger size (around tablet)

12. Image slider does not scale well at all when resizing to different device specs.

13. Image quality on company logos, facebook button and some images are not the right size and image is blurred / distorted.

14. Buttons that overlap the slideshow do not look good.

15.

<br>

    ***

    <br>

## Project Dependencies

<br>

App written and utilized using ...

- vscode
- javascript React

<br>

Packages installed are ...

- live-server
- react.dom
- stylelint
- prettier
- jest-dom

<br>

To test display the website with live-server ensure the correct npm packages are installed and type -npm start in the /learning-the-ropes/reactx folder.

---

## Instructions for how to further develop the App

Currently in progress ...

### Link to deployed website

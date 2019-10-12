# project-2

UNC Coding Bootcamp
Fullstack Web Development
Project 2
Team #

Our Team:
Katie
Suraj
Philip
Joshua


What is this?
This app uses YouTube API to view videos provided by users as links.
The goal is reviews of hosted videos by gaming professionals to provide coaching feedback to community posters.

API's, New Tech
This project utilizes:
* Youtube API
* Twitch API
* Node.js
* mySQL

Who did what?

Philip: SQL, Forms, Models, Routes

Suraj: Twitch API, Front-End

Katie: Youtube API, Front-End

### Walkthrough

1. The opening screen is comprised of Dojo doors as a login screen. The dojo doors open upon user authentication.

2. User main screen is based upon user type: Contributor or Coach

3. Contributor:
    a. Contributor Main Screen:
        i. Default YouTube video {{playing without sound?}} (based on user preferred games)
        ii. A scrolling element of button links to view videos
            1. Buttons contain Video Name, Contributor Name, Game Name, and Video Type Request (Icon based on game name?)
        iii. An "upload" button which links to a page to accept the video input data
        iv. A scrolling element of buttons links to view video reviews
        v. A search box which returns posted videos by game name, video type, or contributor type
    b. Contributor.view
        i. Main video playing the video button selected.
        ii. A scrolling element of button links to view videos (3.a.ii)
    c. Contributor.search
        i. Default YouTube video playing based on game name
        ii. A scrolling element of button links to view videos (based on user search)
        iii. a search box which returned posted videos by game name, video type, or contributor type
    d. Contributor.upload
        i. Input box - youtube.url (type control for youtube?)
        ii. Input box - Video Name
        iii. Input box - Game Name
        iv. Checkboxes - Coaching Request, Brag, Contributor reviews...
    e. Contributor.coachreview
        i. Text box readout of coaches' comments on video
        ii. Dropdown of -3 to +3 to value coaches feedback and provide DINGbucks to coaches

4. Coach: 
    a. Coach Main Screen
        i. Default YouTube video playing without sound(based on user preferred games)
        ii. Buttons to route to:
            1. Coach
            2. Watch
            3. Contribute
    b. Coach.coach
        i. Default YouTube video changes to video selected on link
        ii. An input box opens up at bottom of page for text feedback on video
        iii. A drop-down is provided to score a game -5 to +5 to provide DINGbucks to the poster
    c. Coach.search
        i. See contributor.search (3.c)
    d. Coach.upload
        i. See contributor.upload (3.d)

### Data
1. Structure:
    a. Users Table
        i. User Name
        ii. User Role
        iii. Belt Level
        iv. DING-bucks
        v. Password? {{ How do we do auth? }}
        vi. ID
        vii. Preferences?:
            1. Game Name
            2. Game Type
    b. Videos Table
        i. ID
        ii. Video Name
        iii. Game Name
        iv. URL  {{ "?v=" + %%%%% or split() -11 }} 
        v. User ID
        vi. Description
        vii. Response Request
            1. Coach Feedback
            2. Brag
            3. Contributer Feedback
            4. Don't Be Like Me
    c. Coach Review
        i. Coach review text
        ii. Coach Review Value
    d. Contributor Review
        i. Contributor review text
        ii. Contritubor review value?
    e. Contributor Review of Coach Review
        i. Contributor review text
        ii. Contributor value of coach review

2. Routing:
    a. Contributor
        i. /:username/ - main view by user.role
        ii. /:username/view/:id/ - contributor.view showing video from clicked button
        iii. /:username/search/?q={input}+{input}+etc... - return buttons for videos matching input
        iv. /:username/upload/ - contributor.upload with the 4 inputs
        v. /:username/vidrev/:id/
    b. Coach
        i. /:username/ - main view by user.role
        ii. /:username/view/:id/ - contributor.view showing video from clicked button
        iii. /:username/search/?q={input}+{input}+etc... - return buttons for videos matching input
        iv. /:username/upload/ - contributor.upload with the 4 inputs
        v. /:username/coach/:id/ - coach.coach view to provide feedback and value earned

### Models/Sequelize
1. Index
2. Video
3. Coach Review
4. Contributor Post
5. Contributor Coach Review
6. Search
7. User

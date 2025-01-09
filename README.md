# Netflix GPT

- Create React App
- Configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implemented Sign In user Api
- Created Redux Store with userSlice
- Implemented sign out
- Update Profile
- BugFix: Sign Up user displayName and Profile Picture
- BugFix: If the user is not logged in Redirect /browse to login page and vice versa.
- Unsubscribed to onAuthStateChanged callback
- Add hardcoded values to the constants file.
- Register TMDB API and create an app and get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create MovieSlice
- Update Store with movies Data
- Planning for MainContainer and secondary container
- Fetch Data for Trailer Video (key and movieId is different)
- Update Store with Trailer Video data
- Embedded the Youtube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movie List
- Build Movie card
- Found out TMDB Image CDN URL
- MAKE THE BROWSE PAGE AMAZING WITH TAILWIND CSS
- usePopularMoives Custom Hook



# Features
- Login/Sign Up
    - Sign In/Sign up form
    - redirect to Browse Page

- Browse (after authenication)
    - Header
    - Main Movie
        - Tailer in Background
        - Title And Description
        - Movie Suggestions
            - MovieLists * N
- NetflixGPT
    - Search Bar
    - Movie Suggestions

# Steps for Deployment using firebase

- Install firebase CLI - npm install-g firebase-tools
- Firebase Login - firebase login
- Initilize Firebase - firebase init, then select Hosting
- Deploy command - firebase deploy

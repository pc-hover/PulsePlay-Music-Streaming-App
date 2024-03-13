1. Installed tailwind and setup
2. Routers using react-dom-router to setup routes for different pages
- BrowserRouter parent component
- ReactRouter inside this all the routes are defined
- Route path and element is defined
- We can insert Components also inside element
3. Login Page UI
- Created Components folder for different pages inside newfolder routes inside src
- imported them from src to main .js file then inserted them as input to elemenet for each route
4. Adding classes to integrate css "https://tailwindcss.com/docs/height"
5. Explored Tailwind CSS
6. Login Page
- Installed iconify for icon
- Since text and password components will be reused throughout the codebase created their component in src/components/shared folder.
- sended props so customizable one for label and another for className 
- Included --> className = {`${className}`}
- Poppins all Fonts included in index.html added link from google fonts.
- Used react-router-dom {Link} component of link to render stuff from these pages.reduces the number of re render of components in opage whole page is not reloaded.
- Linked sign up and login

7. Home page
- Created Divs accoringly with spotify
- Added Icon using iconify (1. import 2. create component 3. icon="icon/name/here")
- created a a shared IconText.js file in src/components/shared for icon with text 
-  added on hover grey white color color feature 
-  added tailwind css

* How to add new feature in tailwind css 
edit tailwind.configue while --> add feuture as an object under extends -->name it -->rebuild input and output class using command --> "npx tailwindcss -i ./src/input.css -o ./src/output.css"

Wokred on right side of page, Included Navbar. 
- Space-x new tailwind css class
- overflow-auto for scroll
- Inorder to make playlist card data more customizable props of carddata in Playlist wlong with  title. cardData is basically array of json file containg title description and imageUrl.
- to link pages use Link from react-router-dom  <Link to="">Login<Link>

8. Connecting Backend with frontend
- while making API calls first write sample request on how should it look like after completion
-created a serverHelper file in new folder utils inside src folder
-Here we create function which make api calls using axios or fetch.params are the route and body. 

#30 Standard way of storing input text in prop
  value={value}
                onChange={(e)=>{
                    setValue(e.target.value);

 updated TextInput.js with value setValue and signup.js useStates which chnages the entered value as user changes it.       

 - Created  a function in Signup.js for signup which will be called after hitting signup button and at that moment variables {email,username,password ,firstname,lastname} storing the values will be sent to backend and database.
 -Onclick function new thing e.preventDefault (basically prevents the default nature of clicking a buttonthat is submittong form or input )and called signUp function
 -ESLint doesnot allow Commonjs to be above Import{eslint}
 -sending backendurl as object error FIXED
 
#31 Storing the token recieved after creating new user
- this token can be stored in react-cookie package  
- take useCookie has 2 elements cookie,setCookie  in setCookie we set the value of token and give path and expiry date.
- Now register new user devtools->application->cookies we find that new cookie named token stores token returned by backend.
-used useNavigate hook to navigate("/home) after signup
-App.js used ternary operator if token exists then one set of routs else othe set of route


#32 
Storing the song in cloud which will give us a link (string form) that link will be stored in our database.
- Made an account on Cloudinary SaaS service 
- from packge .json on sandBox npm installed 4 cloudinary packages 
- script tag included in index.html
-  preset and cloudname fixed . config.js gitignore to keep preset private
- uploadingis working cloudinary is returning a url where the music is stores secure_url
- Created a submit button which makesAuthenticatedPostrequest using helper.js to /songs/create route with data
- song created in mongo db storing cloudinaryurl of the the song 
-

-
#41
 <loggenInCOntainer>
All the items inside this components will be sent as children prop to the LoggenInConatiner this is what react do.
</loggenInCOntainer>
Reduced Re Render by making a common LoggenIncontaier for Unchanges data in a page which includes th playing song.
Learnt new topic containers 

#42 Goal is to make change the thumbnail and track of song in play pause  bar on clicking .
useContext hook in singleSongcard to get access to currentSong and setcurrentSong
then onClick change currentSong which stores info abpout song.
UI changes for playPause down bar.

#44 Problem Down play pause is re rendered which causes a new bar for new song 
agar mein new route mein ja rha hu then wo bar bhi uske liye new hai button previous song ka control kho de rha hai 

-useffects is getting called whenever i change the page route eventually calling changeSong function again whuch creates new SAME song and plays it .
-useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.
-useRef is a React Hook that lets you reference a value that’s not needed for rendering 

#45 
-Changed jwt payload.sub to payload.identifier
-Created Search bar UI in SearchPage component.
-very impressive UI 

#46 
How to store value from input text
create useState
value={textInput,setInputText}
onChange={(e)=>{
  setTextinput(e.target.value);
}}

#47
Goal : Create playlist using api that i have build in backend adjust it accordingly
Creating a Modal Pop up for playlist
absolute class 
w-screen h-screen
overlay 
onclClick{(e)=>{
  e.stop.propogation
}}

Features still left
-Liked Songs.
-Fix PlayPause context: Song plays whenever the loggedInConatiner re renders.






-Used context hook to set function of pause a song a play it again from where it stopped .


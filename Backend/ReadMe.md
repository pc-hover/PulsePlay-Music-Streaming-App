1. Setup express in backend and react in frontend
2. Mongoose atlas database
3. Creating db models users,song,playlist
4. Connecting MongoDB
5. Authentication Created passport-jwt token using docs
   [
   installed packages passport, passport-jwt
   copied code
   required User model.
   ]
6. Signup page/Login
   [
   4 steps
   ]
7. Song Creation
   -created new route for song
   -used middleware inbetween route
   -pssport.authenticate("user") -> authenticates token and saves user data inside user which can be further used using req.user.--- . we are using it to authenticate user + getting its \_id as artist
   -fetched Song model and created new song usig it

8. Tested APIS create and getsongs
9. Created New route for Playlist {createPlaylist,getPlaylist}

//New Concept (req.params) focus on {get/:playlistId} where playlistId is a variable and is assigned with any value with which this route is called for example get/:abcd this means playlistId=abcd.No Matter what is after {get/:-------} this route is called storing the aftercontent of : inside a variable. where else if their was no colon then this api would have been called only if , it had matched {get/playlistID} word by word.

11. Testing apis

->song/create
working fine!
->song/get/mysongs
Working Fine!
song/get/artist/:artistId
-> if(!artist) not working properly {ERROR fixed: req.params} instead of req.params.artistId
song/get/songname/:songName
-> Not able to find songs in Song Database { ERROR fixed: req.params}

![]=false
!null = true
!undefined = true
find returns empty array if it doesn'nt find anything but we want undefined or null so we use findOne for above case

playlist/create/playlist
->Working fine!

playlist/add/song
->Why we cannot compare objects using ===
->ERROR 304 hitting but not sending message req.user is returning same user no matter what the authentication code.

playlist/get/playlist/:playlistId
->Working fine!
{
const {x} = req.params; or const x = req.params.x;
}
-> ERROR : but on incorrect id not expected output Need to be Fixed

ERROR: Login is not working

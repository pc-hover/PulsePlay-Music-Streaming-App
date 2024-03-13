// import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "./output.css"
import LoginComponent from "./routes/Login.js";
import HomeComponent from "./routes/Home.js"
import LoggedInHomeComponent from "./routes/LoggedInHome.js"
import UploadSong from "./routes/UploadSong.js";
import SignupComponent from "./routes/Signup.js"
import MyMusic from "./routes/MyMusic.js"
import { useCookies } from "react-cookie";
import { songContext } from "./contexts/songContext.js";
import { useState } from "react";
import { SearchSong } from "./routes/SearchPage.js";
import { LibraryComponent } from "./routes/Library.js";
import { SinglePlaylistView } from "./routes/SinglePlaylistView.js";
import { LikedSongs } from "./routes/LikedSongs.js";
function App() {
  const [currentSong, setCurrentSong] = useState(null)

  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setisPaused] = useState(true);

  const [cookie, setCookie] = useCookies(["token"]);
  console.log(cookie.token);
  //using ternary operater if cookie exists then different set of routes will be rendered
  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        {cookie.token ? (
          //logged in routes
          <songContext.Provider value={{ currentSong, setCurrentSong, soundPlayed, setSoundPlayed, isPaused, setisPaused }}>
            <Routes>
              <Route path="/" element={<HomeComponent />}></Route>
              <Route path="/uploadSong" element={<UploadSong />} />
              <Route path="/home" element={<LoggedInHomeComponent />}> </Route>
              <Route path="/myMusic" element={<MyMusic />}></Route>
              <Route path="/searchSong" element={<SearchSong />}></Route>
              <Route path="/library" element={<LibraryComponent />}></Route>
              <Route path="/likedSongs" element={<LikedSongs />}></Route>
              <Route path="/playlist/:playlistId" element={<SinglePlaylistView />}></Route>
              <Route path="*" element={<Navigate to="/home" />}></Route>

            </Routes>
          </songContext.Provider>
        ) : (
          //loggedOut routes
          <Routes>
            <Route path="/home" element={<HomeComponent />}></Route>
            <Route path="/login" element={<LoginComponent />}></Route>
            <Route path="/signup" element={<SignupComponent />}></Route>
            <Route path="*" element={<Navigate to="/login" />}></Route>
          </Routes>
        )}
      </BrowserRouter>
    </div >
  );
}
export default App;


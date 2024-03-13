import { createContext } from "react";

export const songContext = createContext({
    currentSong: null,
    setCurrentSong: (currentSong) => {
        //initially no song will be played so kept this empty
        console.log("Hello from context api");
    },
    soundPlayed: null,
    setSoundPlayed: {},
    isPaused: null,
    setisPaused: {}

});
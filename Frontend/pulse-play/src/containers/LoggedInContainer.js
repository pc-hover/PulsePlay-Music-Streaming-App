import { Icon } from "@iconify/react";
import TextwithHover from "../components/shared/TextwithHover.js";
import IconTextComponent from "../components/shared/IconText.js"
import ButtonComponent from "../components/shared/Button.js";
import { Link } from "react-router-dom";
import { useLayoutEffect, useState, useContext, useRef } from "react";
import { Howl } from "howler";
import { songContext } from "../contexts/songContext.js";
import HomeComponent from "../routes/Home.js";
import { CreatePlaylistModal } from "../modals/CreatePlaylistModal.js";
import { AddPlaylistModal } from "../modals/AddPlaylistModal.js";
import { makeAuthenticatedGETRequest, makeAuthenticatedPOSTRequest } from "../utils/serverHelper.js";
import PulsePlayLogo from '../assets/PulsePlay.svg';
//data for cards json array containg title ,description and image url


const LoggedInContainer = ({ children, currentActiveScreen }) => {

    const [playlistModalOpen, setPlaylistModal] = useState(false);
    const [addPlaylistModalOpen, setAddPlaylistModalOpen] = useState(false);

    const { soundPlayed, setSoundPlayed, isPaused, setisPaused } = useContext(songContext);

    const { currentSong, setCurrentSong } = useContext(songContext);

    const firstUpdate = useRef(true);//useRef has current 

    //    Flow 
    //    clicked on song -> context Current song value chnages -> useEffect called -> chnageSongname called -> if soundPlayed then change it to current song and play it

    useLayoutEffect(() => {
        //following if statement will ensure following code will not run in first render

        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        } else {

            if (!currentSong) {
                return;
            }
            changeSong(currentSong.track);
        }
    }, [currentSong && currentSong.track]);

    //if song is already playing it stops the music else 
    const playSound = () => {
        if (!soundPlayed) {
            return;
        }
        soundPlayed.play();
    }


    const changeSong = (songSrc) => {
        if (soundPlayed) {
            soundPlayed.stop();
        }
        var sound = new Howl({
            src: [songSrc],
            html5: true
        });

        setSoundPlayed(sound);
        sound.play();
        setisPaused(false);//changes the icon
        console.log(soundPlayed);
    };

    const pauseSong = () => {
        if (!soundPlayed) {
            return;
        }
        soundPlayed.pause();
    }
    const togglePlay = () => {
        if (isPaused) {
            playSound(currentSong.track);
            setisPaused(false);
            // alert("Song started");
        } else {
            pauseSong();
            setisPaused(true);
            //alert("Song stopped playing");
        }
    }
    const addSongToPlaylist = async (playlistId) => {
        const songId = currentSong._id;
        const payload = { playlistId, songId };
        console.log(payload);
        const response = await makeAuthenticatedPOSTRequest("/playlist/add/song",
            payload
        );
        console.log(response);
        if (response._id) {

            setPlaylistModal(false);
        }
    }
    const addLikedSongs = async () => {
        const songId = currentSong._id;
        console.log(songId);

        const body = { songId };

        const response = await makeAuthenticatedPOSTRequest("/song/addLiked", body);

        console.log(response);
    };


    return (
        <div className="w-full h-full flex-row ">
            {
                playlistModalOpen && <CreatePlaylistModal closeModal={() => {
                    setPlaylistModal(false);
                }}

                />}

            {addPlaylistModalOpen && <AddPlaylistModal closeModal={() => {
                setAddPlaylistModalOpen(false);

            }} addSongToPlaylist={addSongToPlaylist} />}

            <div className={`w-full ${currentSong ? "h-9/10" : "h-full"} flex`}>

                {/* left part of hompage */}
                <div className=" w-1/5 h-full  bg-black flex flex-col justify-between pb-10 ">
                    <div>

                        {/* Home and Search */}

                        <div className=" homesearch w-full flex flex-col ">

                            {/* <div className="logoDiv py-4">
                                <Icon
                                    className=""
                                    icon="flat-color-icons:music"
                                    width="100px" height="80px">
                                </Icon>
                            </div> */}
                            <div className="py-4  flex items-center ">
                                {/* Replace 'logo.svg' with the path to your SVG file */}
                                <img src={PulsePlayLogo} alt="Logo" className="w-2/3" />
                            </div>

                            <div className="Home">
                                <IconTextComponent
                                    iconName={"material-symbols:home"}
                                    displayText={"Home"}
                                    targetLink={"/home"}
                                    active={"home" === currentActiveScreen}


                                />
                            </div>
                            <div className="Search">
                                <IconTextComponent
                                    iconName={"mingcute:search-line"}
                                    displayText={"Search"}
                                    active={"Search" === currentActiveScreen}
                                    targetLink={"/searchSong"}

                                />
                            </div>
                            <div className="Library">

                                <IconTextComponent
                                    iconName={"fluent:library-20-filled"}
                                    displayText={"Library"}
                                    active={"Library" === currentActiveScreen}
                                    targetLink={"/library"}
                                />

                            </div>
                            <div className="MyMusic">
                                <IconTextComponent
                                    iconName={"material-symbols-light:library-music-sharp"}
                                    displayText={"My Music"}
                                    targetLink={"/myMusic"}
                                    active={"myMusic" === currentActiveScreen}
                                />
                            </div>

                        </div>


                        <div className="Create h-full mt-5">
                            <IconTextComponent
                                iconName={"icon-park-solid:add"}
                                displayText={"Create Playlist"}
                                onClick={() => {
                                    setPlaylistModal(true);
                                }}
                            />
                            <IconTextComponent
                                iconName={"bxs:heart-square"}
                                displayText={"Liked Songs"}
                                active={"LikedSongs" === currentActiveScreen}
                                targetLink={"/likedSongs"}

                            />

                        </div>
                    </div>
                    <div className="px-5 pb-20">

                        < div className="rounded-full items-center -justify-center border border-gray-400 mt-full text-white w-2/5 flex px-2 py-1 text-gray-400 hover:text-white hover:border-white">
                            <Icon icon="ph:globe-thin" />  <div className="ml-2 text-sm font">English</div>
                        </div>
                    </div>




                </div>
                {/* right part of homepage */}
                <div className="h-full w-4/5 bg-app-black overflow-auto">

                    <div className="navbar bg-black w-full h-1/10  bg-opacity-30 flex items-center justify-end">
                        <div className="w-1/2 h-full flex">
                            <div className="w-2/3 flex justify-around items-center">
                                <TextwithHover displayText={"Premium"} />
                                <TextwithHover displayText={"Support"} />
                                <TextwithHover displayText={"Download"} />
                                < div className="border-r border-white h-1/2"></div>
                            </div>
                            <div className="w-1/3 flex h-full items-center justify-around">
                                <Link to={"/uploadSong"}>
                                    <TextwithHover displayText={"Upload Song"} />

                                </Link>
                                <div className="bg-white fontSize={40}  flex items-center justify-center rounded-full font-semibold cursor-pointer p-2">
                                    PC
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content p-8 pt-0 overflow-auto">
                        {/* props sent by the parent component */}
                        {children}
                    </div>
                </div>
            </div>

            {/* /*this div is for current playing song */}
            {
                currentSong &&
                (<div className="w-full h-1/10 bg-app-black flex items-center justify-items-start text-white">
                    <div className="w-1/3 flex items-center">
                        <img src={currentSong.thumbnail} alt="soundPlayed thumbnail" className="w-14 h-14 rounded-lg p-1"></img>
                        <div className="pl-4">
                            <div alt="">{currentSong.name}</div>
                            <div alt="" className="text-xs text-gray-400">{currentSong.artist.firstName + " " + currentSong.artist.lastName}</div>
                        </div>

                    </div>

                    <div className="text-white w-1/3 h-full flex flex-col items-center justify-center ">
                        <div className="flex flex-row w-full justify-evenly items-center">
                            {/* controls for playing songs */}

                            <Icon icon="ph:shuffle-fill" className="cursor-pointer text-gray-500 hover:text-white" fontSize={30} />
                            <Icon icon="fluent:previous-32-filled" className="cursor-pointer text-gray-500 hover:text-white" fontSize={30} />
                            {isPaused ? (
                                <Icon icon="emojione-monotone:play-button" fontSize={50} className="cursor-pointer text-gray-500 hover:text-white" onClick={togglePlay} />
                            ) : (
                                <Icon icon="zondicons:pause-solid" fontSize={50} className="cursor-pointer text-gray-500 hover:text-white" onClick={togglePlay} />
                            )}
                            <Icon icon="fluent:next-16-filled" className="cursor-pointer text-gray-500 hover:text-white" fontSize={30} />
                            <Icon icon="ic:outline-repeat" className="cursor-pointer text-gray-500 hover:text-white" fontSize={30} />
                        </div>

                    </div>
                    <div className="text-white w-1/4 flex justify-end items-center h-1/2 space-x-6 pr-4">
                        <Icon icon="ic:sharp-playlist-add" className="cursor-pointer"
                            fontSize={30}
                            onClick={
                                () => {
                                    setAddPlaylistModalOpen(true);
                                }
                            } />
                        <Icon icon="icon-park-outline:like" fontSize={30}
                            className="cursor-pointer"
                            onClick={() => {
                                alert("Adding this song to Liked Songs")
                                addLikedSongs();

                            }} />
                    </div>

                </div>
                )}
        </div>
    );
}

export default LoggedInContainer;

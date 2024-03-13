import { Icon } from "@iconify/react";
import TextwithHover from "../components/shared/TextwithHover.js";
import IconTextComponent from "../components/shared/IconText.js"
import { useState, useEffect } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper.js";
import SingleSongCard from "../components/shared/SingleSongCard.js";
import { Howl, Howler } from 'howler';
import LoggedInContainer from "../containers/LoggedInContainer.js";

//data for cards json array containg title ,description and image url

// const songData1 = [
//     {
//         thumbnail: "https://i.scdn.co/image/ab67616d0000b273a0aea3805ed6a87aa394c796",
//         name: "Curtains",
//         artists: "Ed Shereen"
//     },
//     {
//         thumbnail: "https://source.boomplaymusic.com/group10/M00/DD/5B/6d64088a425a4655bf8d890107825951_464_464.jpg",
//         name: "Skyfall",
//         artists: "Adele"
//     },
//     {
//         thumbnail: "https://i.scdn.co/image/ab67616d0000b273a0aea3805ed6a87aa394c796",
//         name: "Curtains",
//         artists: "Ed Shereen"
//     },
//     {
//         thumbnail: "https://source.boomplaymusic.com/group10/M00/DD/5B/6d64088a425a4655bf8d890107825951_464_464.jpg",
//         name: "Skyfall",
//         artists: "Adele"
//     },
//     {
//         thumbnail: "https://i.scdn.co/image/ab67616d0000b273a0aea3805ed6a87aa394c796",
//         name: "Curtains",
//         artists: "Ed Shereen"
//     },
//     {
//         thumbnail: "https://source.boomplaymusic.com/group10/M00/DD/5B/6d64088a425a4655bf8d890107825951_464_464.jpg",
//         name: "Skyfall",
//         artists: "Adele"
//     },
//     {
//         thumbnail: "https://i.scdn.co/image/ab67616d0000b273a0aea3805ed6a87aa394c796",
//         name: "Curtains",
//         artists: "Ed Shereen"
//     },
//     {
//         thumbnail: "https://source.boomplaymusic.com/group10/M00/DD/5B/6d64088a425a4655bf8d890107825951_464_464.jpg",
//         name: "Skyfall",
//         artists: "Adele"
//     },

// ]


const MyMusic = () => {
    const [songData, setSongData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest("/song/get/mysongs");
            setSongData(response.data);
            // console.log(response);
        }
        getData();
    }, [setSongData]);
    return (
        <LoggedInContainer currentActiveScreen="myMusic">


            <div className="text-white font-semibold text-xl pb-4 pl-2 pt-6">
                My Songs
            </div>
            <div className="space-y-2  overflow-auto">
                {
                    songData.map((item) => {
                        return <SingleSongCard info={item} playSound={() => {
                            {/*Empty Function lec 41 */ }
                        }} />
                    })
                }


            </div>


        </LoggedInContainer >
    )
}

// const MyMusic = () => {
//     const [songData, setSongData] = useState([]);
//     const [soundPlayed, setSoundPlayed] = useState(null);
//     //if song is already playing it stops the music else 
//     const playSound = (songSrc) => {
//         if (soundPlayed) {
//             soundPlayed.stop();
//         }
//         var sound = new Howl({
//             src: [songSrc],
//             html5: true
//         });

//         setSoundPlayed(sound);
//         sound.play();
//         console.log(soundPlayed);
//     };

//     useEffect(() => {
//         const getData = async () => {
//             const response = await makeAuthenticatedGETRequest("/song/get/mysongs");
//             setSongData(response.data);
//             console.log(response);
//         }
//         getData();
//     }, [setSongData]);

//     return (
//         <div className="w-full h-full flex ">

//             {/* left part of hompage */}
//             <div className=" w-1/5 h-full  bg-black flex flex-col justify-between pb-10 ">
//                 <div>

//                     {/* Home and Search */}

//                     <div className=" homesearch w-full flex flex-col ">

//                         <div className="logoDiv py-4">
//                             <Icon
//                                 className=""
//                                 icon="flat-color-icons:music"
//                                 width="100px" height="80px">
//                             </Icon>
//                         </div>
//                         <div className="Home">
//                             <IconTextComponent
//                                 iconName={"material-symbols:home"}
//                                 displayText={"Home"}
//                                 active

//                             />
//                         </div>
//                         <div className="Search">
//                             <IconTextComponent
//                                 iconName={"mingcute:search-line"}
//                                 displayText={"Search"}
//                             />
//                         </div>
//                         <div className="Search">
//                             <IconTextComponent
//                                 iconName={"fluent:library-20-filled"}
//                                 displayText={"Library"}
//                             />
//                         </div>
//                         <div className="Search">
//                             <IconTextComponent
//                                 iconName={"material-symbols-light:library-music-sharp"}
//                                 displayText={"My Music"}
//                             />
//                         </div>

//                     </div>


//                     <div className="Create h-full mt-5">
//                         <IconTextComponent
//                             iconName={"icon-park-solid:add"}
//                             displayText={"Create Playlist"}
//                         />
//                         <IconTextComponent
//                             iconName={"bxs:heart-square"}
//                             displayText={"Liked Songs"}
//                         />

//                     </div>
//                 </div>
//                 <div className="px-5 pb-20">

//                     < div className="rounded-full items-center -justify-center border border-gray-400 mt-full text-white w-2/5 flex px-2 py-1 text-gray-400 hover:text-white hover:border-white">
//                         <Icon icon="ph:globe-thin" />  <div className="ml-2 text-sm font">English</div>
//                     </div>
//                 </div>




//             </div>
//             {/* right part of homepage */}
//             <div className="h-full w-4/5  bg-app-black overflow-auto">

//                 <div className="navbar bg-black w-full h-1/10  bg-opacity-30 flex items-center justify-end">
//                     <div className="w-1/2 h-full flex">
//                         <div className="w-2/3 flex justify-around items-center">
//                             <TextwithHover displayText={"Premium"} />
//                             <TextwithHover displayText={"Support"} />
//                             <TextwithHover displayText={"Download"} />
//                             < div className="border-r border-white h-1/2"></div>
//                         </div>
//                         <div className="w-1/3 flex h-full items-center justify-around">
//                             <TextwithHover displayText={"Upload Song"} />
//                             <div className="bg-white h-10 w-10  flex items-center justify-center rounded-full font-semibold cursor-pointer"> PC
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* My music card */}
//                 <div className="">
//                     <div className="text-white font-semibold text-xl pb-4 pl-2">
//                         My Songs
//                     </div>
//                     <div className="space-y-2  overflow-auto">
//                         {
//                             songData.map((item) => {
//                                 return <SingleSongCard info={item} playSound={playSound} />
//                             })
//                         }


//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }


export default MyMusic;

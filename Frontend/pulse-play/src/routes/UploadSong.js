import { Icon } from "@iconify/react";
import TextwithHover from "../components/shared/TextwithHover.js";
import TextInput from "../components/shared/TextInput.js";
import IconTextComponent from "../components/shared/IconText.js"
import ButtonComponent from "../components/shared/Button.js";
import CloudinaryUpload from "../components/shared/CloudinaryUpload.js";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelper.js";
import LoggedInContainer from "../containers/LoggedInContainer.js";

//data for cards json array containg title ,description and image url

console.log(window);
console.log(window.cloudinary);
const UploadSong = () => {

    const [name, setName] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [songUrl, setSongUrl] = useState("");
    const [playlistUrl, setPlaylistUrl] = useState("");
    const [uploadedSongFileName, setUploadedSongFileName] = useState("")
    const navigate = useNavigate();

    const submitSong = async () => {
        console.log(name);
        console.log(thumbnail);
        console.log(playlistUrl);
        const data = { name, thumbnail, track: playlistUrl };
        const response = await makeAuthenticatedPOSTRequest("/song/create", data);
        if (response.err) {
            alert("Could nOt Create Song");
            return;
        }
        else {
            alert("Success");
            navigate("/home");
        }
        console.log(response);
    }
    // return (
    //     <div className="w-full h-full flex ">

    //         {/* left part of hompage */}
    //         <div className=" w-1/5 h-full  bg-black flex flex-col justify-between pb-10 ">
    //             <div>

    //                 {/* Home and Search */}

    //                 <div className=" homesearch w-full flex flex-col ">

    //                     <div className="logoDiv py-4">
    //                         <Icon
    //                             className=""
    //                             icon="flat-color-icons:music"
    //                             width="100px" height="80px">
    //                         </Icon>
    //                     </div>
    //                     <div className="Home">
    //                         <IconTextComponent
    //                             iconName={"material-symbols:home"}
    //                             displayText={"Home"}
    //                             active

    //                         />
    //                     </div>
    //                     <div className="Search">
    //                         <IconTextComponent
    //                             iconName={"mingcute:search-line"}
    //                             displayText={"Search"}
    //                         />
    //                     </div>
    //                     <div className="Search">
    //                         <IconTextComponent
    //                             iconName={"fluent:library-20-filled"}
    //                             displayText={"Library"}
    //                         />
    //                     </div>
    //                     <div className="Search">
    //                         <IconTextComponent
    //                             iconName={"material-symbols-light:library-music-sharp"}
    //                             displayText={"My Music"}
    //                         />
    //                     </div>

    //                 </div>


    //                 <div className="Create h-full mt-5">
    //                     <IconTextComponent
    //                         iconName={"icon-park-solid:add"}
    //                         displayText={"Create Playlist"}
    //                     />
    //                     <IconTextComponent
    //                         iconName={"bxs:heart-square"}
    //                         displayText={"Liked Songs"}
    //                     />

    //                 </div>
    //             </div>
    //             <div className="px-5 pb-20">

    //                 < div className="rounded-full items-center -justify-center border border-gray-400 mt-full text-white w-2/5 flex px-2 py-1 text-gray-400 hover:text-white hover:border-white">
    //                     <Icon icon="ph:globe-thin" />  <div className="ml-2 text-sm font">English</div>
    //                 </div>
    //             </div>




    //         </div>
    //         {/* right part of homepage */}
    //         <div className="h-full w-4/5  bg-app-black overflow-auto">

    //             <div className="navbar bg-black w-full h-1/10  bg-opacity-30 flex items-center justify-end">
    //                 <div className="w-1/2 h-full flex">
    //                     <div className="w-2/3 flex justify-around items-center">
    //                         <TextwithHover displayText={"Premium"} />
    //                         <TextwithHover displayText={"Support"} />
    //                         <TextwithHover displayText={"Download"} />
    //                         < div className="border-r border-white h-1/2"></div>
    //                     </div>
    //                     <div className="w-1/3 flex h-full items-center justify-around">
    //                         <TextwithHover displayText={"Upload Song"} />
    //                         <div className="bg-white h-10 w-10  flex items-center justify-center rounded-full font-semibold cursor-pointer"> PC
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             {/* Uplaod your music card */}
    //             <div className="content p-8 pt-0 overflow-auto">
    //                 <div className="text-white text-2xl font-semibold mb-5 mt-8">
    //                     Upload Your Music
    //                 </div>
    //                 <div className="  w-2/3 flex  text-sm font-semibold space-x-4 ">

    //                     <div className="w-1/2">
    //                         <TextInput
    //                             label="Song Name"
    //                             className={"text-white"}
    //                             placeholder={"Song Name"}
    //                             setValue={setName}
    //                             value={name}
    //                         />
    //                     </div>

    //                     <div className="w-1/2 ">
    //                         <TextInput
    //                             label="Thumbnail"
    //                             className={"text-white"}
    //                             placeholder={"Thumbnail"}
    //                             setValue={setThumbnail}
    //                             value={thumbnail}
    //                         />
    //                     </div>

    //                 </div>
    //                 <div className="pt-5">

    //                     {
    //                         uploadedSongFileName ? (
    //                             <div className="bg-white rounded-full p-3 w-1/3">
    //                                 {uploadedSongFileName.substring(0, 40)}......
    //                             </div>) : (
    //                             <CloudinaryUpload
    //                                 setUrl={setPlaylistUrl}
    //                                 setName={setUploadedSongFileName} />)
    //                     }
    //                 </div>
    //                 <div className="bg-white flex flex-col justify-center items-center w-40 p-4 mt-10 rounded-full cursor-pointer font-semibold " onClick={submitSong}>
    //                     Submit Song
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );



    return (
        <LoggedInContainer>
            <div className="content p-8 pt-0 overflow-auto">
                <div className="text-white text-2xl font-semibold mb-5 mt-8">
                    Upload Your Music
                </div>
                <div className="  w-2/3 flex  text-sm font-semibold space-x-4 ">

                    <div className="w-1/2">
                        <TextInput
                            label="Song Name"
                            className={"text-white"}
                            placeholder={"Song Name"}
                            setValue={setName}
                            value={name}
                        />
                    </div>

                    <div className="w-1/2 ">
                        <TextInput
                            label="Thumbnail"
                            className={"text-white"}
                            placeholder={"Thumbnail"}
                            setValue={setThumbnail}
                            value={thumbnail}
                        />
                    </div>

                </div>
                <div className="pt-5">

                    {
                        uploadedSongFileName ? (
                            <div className="bg-white rounded-full p-3 w-1/3">
                                {uploadedSongFileName.substring(0, 40)}......
                            </div>) : (
                            <CloudinaryUpload
                                setUrl={setPlaylistUrl}
                                setName={setUploadedSongFileName} />)
                    }
                </div>
                <div className="bg-white flex flex-col justify-center items-center w-40 p-4 mt-10 rounded-full cursor-pointer font-semibold " onClick={submitSong}>
                    Submit Song
                </div>
            </div>
        </LoggedInContainer>
    );
}


export default UploadSong;

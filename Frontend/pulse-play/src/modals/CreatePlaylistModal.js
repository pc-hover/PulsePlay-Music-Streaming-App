//Overlay

import TextInput from "../components/shared/TextInput";
import { useState } from "react";
import { makeAuthenticatedPOSTRequest } from "../../src/utils/serverHelper"

export const CreatePlaylistModal = ({ closeModal }) => {

    const [playlistName, setPlaylistName] = useState("");
    const [playlistThumbnail, setPlaylistThumbnail] = useState("");

    const createPlaylist = async () => {
        const response = await makeAuthenticatedPOSTRequest("/playlist/create/playlist", { name: playlistName, thumbnail: playlistThumbnail, songs: [] });
        console.log(response);
        if (response._id) {
            closeModal();
        }
    }
    return (
        <div className="absolute w-screen h-screen bg-blue-900 bg-opacity-50 flex items-center justify-center" onClick={closeModal}>

            <div className="bg-gray-900 w-1/3 h-2/3 rounded p-5 text-white  " onClick={(e) => {
                e.stopPropagation();
            }}>

                <div className="flex justify-center items-center font-semibold p-3">Create Playlist</div>
                <div className="flex flex-col justify-center items-center">
                    <TextInput
                        label="Playlist Name"
                        className={"text-white py-2 font-semibold"}
                        placeholder={"Enter Playlist name"}
                        value={playlistName}
                        setValue={setPlaylistName}


                    />
                    <TextInput
                        label="Thumbnail"
                        className={"text-white py-2 font-semibold"}
                        placeholder={"Thumbnail"}
                        value={playlistThumbnail}
                        setValue={setPlaylistThumbnail}

                    />

                    <div className="bg-white rounded-full p-4 w-1/4 text-black font-bold flex justify-center items-center cursor-pointer mt-5" onClick={() => {
                        createPlaylist();

                    }}
                    >Create</div>

                </div>

            </div>


        </div>
    );
};
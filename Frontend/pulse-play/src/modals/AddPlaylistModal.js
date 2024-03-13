import { useState, useEffect, useContext } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelper";
import { songContext } from "../contexts/songContext";

export const AddPlaylistModal = ({ closeModal, addSongToPlaylist }) => {

    const [myPlaylist, setMyPlaylist] = useState([]);
    useEffect(() => {

        const getData = async () => {
            const response = await makeAuthenticatedGETRequest("/playlist/get/me")
            console.log(response);
            setMyPlaylist(response.data);
        }
        getData();

    }
        , []
    )


    return (
        <div className="absolute w-screen h-screen bg-blue-900 bg-opacity-50 flex items-center justify-center " onClick={closeModal}>

            <div className="bg-gray-900 w-1/2 h-2/3 rounded p-5 text-white  " onClick={(e) => {
                e.stopPropagation();
            }}>

                <div className="flex justify-center items-center font-semibold p-3">Your PlayLists</div>
                <div className=" spavce-y-4 flex flex-col justify-center items-center overflow-hidden">

                    {
                        myPlaylist.map(item => {
                            return <PlaylistsView info={item} addSongToPlaylist={addSongToPlaylist} />

                        })
                    }


                </div>

            </div>


        </div>
    )
}
const PlaylistsView = ({ info, addSongToPlaylist }) => {
    return (
        <div className="w-full text-white flex hover:bg-gray-400 hover:bg-opacity-20 p-3 rounded-md" onClick={() => {
            //Add to this Playlist
            addSongToPlaylist(info._id);
        }}>
            <div
                className="w-12 h-12 bg-cover bg-center " style={{
                    backgroundImage: `url("${info.thumbnail}")`
                }}>

            </div>
            <div className="flex w-full ">
                <div className="text-white flex flex-col justify-center pl-4 w-5/6 ">
                    <div className="cursor-pointer hover:underline"> {info.name}</div>
                </div>

            </div >
        </div >
    )
}

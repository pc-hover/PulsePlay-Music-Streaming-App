import { useState, useEffect } from "react"
import LoggedInContainer from "../containers/LoggedInContainer"
import { makeAuthenticatedGETRequest } from "../utils/serverHelper"
import { Navigate, useNavigate } from "react-router-dom";


export const LibraryComponent = () => {
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
        <LoggedInContainer currentActiveScreen={"Library"}>

            <div className=" font-semibold">
                <div className="text-white font-semibold text-xl pb-4 pl-2 pt-6"> Playlists </div>
                <div className="grid grid-cols-4 gap-5 py-5">
                    {
                        myPlaylist.map(item => {
                            return <CardView
                                key={JSON.stringify(item)}
                                title={item.name}
                                imgUrl={item.thumbnail}
                                playlistId={item._id}
                            />
                        })
                    }
                </div>

            </div>


        </LoggedInContainer>)
}
const CardView = ({ title, description, imgUrl, playlistId }) => {
    const navigate = useNavigate();
    return (
        <div className="bg-black bg-opacity-60 w-full p-4 rounded-lg hover:bg-gray-900" onClick={() => [
            navigate("/playlist/" + playlistId)
        ]}>
            <div className="pb-4 pt-2">
                <img className="w-full rounded-md my-2" src={imgUrl} alt="label"></img>
            </div>
            <div className="text-white text-sm font-semibold cursor-pointer">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    );
};

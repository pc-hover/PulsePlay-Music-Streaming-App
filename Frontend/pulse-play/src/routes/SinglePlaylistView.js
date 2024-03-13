import LoggedInContainer from "../containers/LoggedInContainer"
import { useParams } from "react-router-dom"
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";
import { useEffect, useState } from "react";
import SingleSongCard from "../components/shared/SingleSongCard";
export const SinglePlaylistView = () => {

    const [playListInfo, setPlaylistInfo] = useState({});
    const { playlistId } = useParams();
    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest("/playlist/get/playlist/" + playlistId)
            console.log(response);
            if (response) {
                setPlaylistInfo(response);
            }
        }
        getData();
    }, []);
    return (

        <LoggedInContainer currentActiveScreen={"Library"}>
            {
                playListInfo._id &&
                <div className="">
                    <div className="text-white text-lg p-6 font-semibold"> Songs in {playListInfo.name}  </div>
                    <div className="flex flex-col py-5">
                        {
                            playListInfo.songs.map(item => {
                                return <SingleSongCard
                                    info={item}
                                    key={JSON.stringify(item)}
                                    playSound={() => {
                                        //empty
                                    }}
                                />
                            })
                        }
                    </div>

                </div>

            }
        </LoggedInContainer>
    )
}
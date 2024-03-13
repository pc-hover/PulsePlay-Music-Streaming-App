import LoggedInContainer from "../containers/LoggedInContainer"
import { useState, useEffect } from "react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelper";
import SingleSongCard from "../components/shared/SingleSongCard";
export const LikedSongs = () => {

    const [likedSongs, setLikedSongs] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest("/song/get/likedSongs");
            setLikedSongs(response.data);
            // console.log(response);
        }
        getData();
    }, [setLikedSongs]);
    return (


        <LoggedInContainer>
            <div className="text-white font-semibold text-xl pb-4 pl-2 py-6">
                Liked Songs
            </div>
            <div className="space-y-2  overflow-auto">
                {
                    likedSongs.map((item) => {
                        return <SingleSongCard info={item} playSound={() => {
                            {/*Empty Function lec 41 */ }
                        }} />
                    })
                }


            </div>
        </LoggedInContainer>
    )
}
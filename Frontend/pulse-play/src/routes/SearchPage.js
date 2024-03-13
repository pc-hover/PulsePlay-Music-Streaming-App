import LoggedInContainer from "../containers/LoggedInContainer"
import TextInput from "../components/shared/TextInput"
import { useState } from "react"
import ButtonComponent from "../components/shared/Button"
import { Icon } from "@iconify/react"
import { makeAuthenticatedGETRequest } from "../utils/serverHelper"
import SingleSongCard from "../components/shared/SingleSongCard"


export const SearchSong = () => {
    const [songData, setSongData] = useState([])
    const [searchText, setSearchText] = useState("");

    const [isInputFocused, setIsInputFocused] = useState(false);

    const searchCall = async () => {
        const response = await makeAuthenticatedGETRequest(`/song/get/songname/` + searchText);
        console.log(response.data);
        setSongData(response.data);
    }

    return (

        < LoggedInContainer currentActiveScreen="Search" >
            <div className="flex items-center py-6 space-x-5">

                <div
                    className={`w-1/2 text-white font-semibold w-1/3 p-2 rounded-full bg-gray-800 space-x-3 flex ${isInputFocused ? "border border-white" : ""
                        }`}
                >
                    <Icon icon="ic:sharp-search" className="w-10 h-10" />

                    <input
                        type="text"
                        placeholder="What song do you want listen ?"
                        className="w-full bg-gray-800 focus:outline-none" onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                searchCall();
                            }
                        }}
                        onBlur={() => {
                            setIsInputFocused(false);
                        }}
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                </div>
                <ButtonComponent label={"Search"} className={" bg-white font-semibold rounded-full p-3"} onlclickFunction={() => {
                    alert("Time to call API :) ")
                    searchCall();
                }} />
            </div>
            {songData.length > 0 ? (<div className="pt-5 space-y-4 overflow-auto">

                <div className="text-gray-300 ">Showing Search Results for "<span className="text-white font-semibold">
                    {searchText}
                </span>"
                </div>
                {
                    songData.map((item) => {
                        return <SingleSongCard info={item}
                            playSound={() => {
                            }}
                        />
                    }
                    )
                }

            </div>) :
                <div className="text-gray-400 pt-6 h-full w-full overflow-auto flex">

                    Explore Latest Songs on Pulse Play.
                </div>
            }
        </LoggedInContainer >
    )
}
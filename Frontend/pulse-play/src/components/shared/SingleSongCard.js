import { songContext } from "../../contexts/songContext";
import { useContext } from "react";
export const SingleSongCard = ({ info, playSound }) => {

    const { currentSong, setCurrentSong } = useContext(songContext);
    console.log(info);
    return <div className="text-white flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-md" onClick={() => {
        setCurrentSong(info);
    }}>
        <div
            className="w-12 h-12 bg-cover bg-center " style={{
                backgroundImage: `url("${info.thumbnail}")`
            }}>

        </div>
        <div className="flex w-full ">
            <div className="text-white flex flex-col justify-center pl-4 w-5/6 ">
                <div className="cursor-pointer hover:underline"> {info.name}</div>
                <div className="text-xs text-gray-400 cursor-pointer hover:underline"> {info.artist.firstName + " " + info.artist.lastName}</div>
            </div>
            <div className="flex w-1/6 items-center justify-center text-gray-400 text-sm">
                <div>3.44</div>
                {/* <div className="text-gray-400 text-lg flex items-center justify-center">...</div> */}
            </div>
        </div >
    </div >


}
export default SingleSongCard;
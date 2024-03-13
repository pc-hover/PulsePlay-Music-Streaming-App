import { Icon } from "@iconify/react";
import TextwithHover from "../components/shared/TextwithHover.js";
import IconTextComponent from "../components/shared/IconText.js"
import ButtonComponent from "../components/shared/Button.js";
import { Link } from "react-router-dom";

//data for cards json array containg title ,description and image url

const focusCardsData = [
    {
        title: "Todays Top Hits",
        description: "Benson Noone is on top of the Hottest 50!",
        imgUrl: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452"
    },
    {
        title: "New Releases",
        description: "Discover the latest tracks making waves!",
        imgUrl: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452"
    },
    {
        title: "Summer Vibes Playlist",
        description: "Get ready for the sun with these upbeat tunes!",
        imgUrl: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452"
    },
    {
        title: "Chill Out Zone",
        description: "Unwind with smooth melodies and relaxing beats.",
        imgUrl: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452"
    },
    {
        title: "Throwback Jams",
        description: "Take a trip down memory lane with these classic hits!",
        imgUrl: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452"
    },
];
const soundOfIndiaCardsData = [
    {
        title: "Todays Top Hits",
        description: "Benson Noone is on top of the Hottest 50!",
        imgUrl: "https://i1.sndcdn.com/avatars-000004908407-lhc3cv-t500x500.jpg"
    },
    {
        title: "New Releases",
        description: "Discover the latest tracks making waves!",
        imgUrl: "https://i1.sndcdn.com/avatars-000004908407-lhc3cv-t500x500.jpg"
    },
    {
        title: "Summer Vibes Playlist",
        description: "Get ready for the sun with these upbeat tunes!",
        imgUrl: "https://i1.sndcdn.com/avatars-000004908407-lhc3cv-t500x500.jpg"
    },
    {
        title: "Chill Out Zone",
        description: "Unwind with smooth melodies and relaxing beats.",
        imgUrl: "https://i1.sndcdn.com/avatars-000004908407-lhc3cv-t500x500.jpg"
    },
    {
        title: "Throwback Jams",
        description: "Take a trip down memory lane with these classic hits!",
        imgUrl: "https://i1.sndcdn.com/avatars-000004908407-lhc3cv-t500x500.jpg"
    },
];
const spotifyPlaylistcardData = [
    {
        title: "Indie Pop Vibes",
        description: "Discover the latest indie pop tracks!",
        imgUrl: "https://kspc.org/wp-content/uploads/2013/12/WIB-7-indie-pop.jpg"
    },
    {
        title: "Chill Indie",
        description: "Relax with some mellow indie tunes.",
        imgUrl: "https://kspc.org/wp-content/uploads/2013/12/WIB-7-indie-pop.jpg"
    },
    {
        title: "Indie Summer Sounds",
        description: "Perfect tunes for lazy summer days.",
        imgUrl: "https://kspc.org/wp-content/uploads/2013/12/WIB-7-indie-pop.jpg"
    },
    {
        title: "Indie Dance Party",
        description: "Get your groove on with indie beats!",
        imgUrl: "https://kspc.org/wp-content/uploads/2013/12/WIB-7-indie-pop.jpg"
    },
    {
        title: "Indie Acoustic Bliss",
        description: "Enjoy acoustic indie melodies for a cozy evening.",
        imgUrl: "https://kspc.org/wp-content/uploads/2013/12/WIB-7-indie-pop.jpg"
    },
];

const HomeComponent = () => {
    return (
        <div className="w-full h-full flex ">

            {/* left part of hompage */}
            <div className=" w-1/5 h-full  bg-black flex flex-col justify-between pb-10 ">
                <div>

                    {/* Home and Search */}

                    <div className=" homesearch w-full flex flex-col ">

                        <div className="logoDiv py-4">
                            <Icon
                                className=""
                                icon="flat-color-icons:music"
                                width="100px" height="80px">
                            </Icon>
                        </div>
                        <div className="Home">
                            <IconTextComponent
                                iconName={"material-symbols:home"}
                                displayText={"Home"}
                                active

                            />
                        </div>
                        <div className="Search">
                            <IconTextComponent
                                iconName={"mingcute:search-line"}
                                displayText={"Search"}
                            />
                        </div>
                        <div className="Search">
                            <IconTextComponent
                                iconName={"fluent:library-20-filled"}
                                displayText={"Library"}
                            />
                        </div>

                    </div>


                    <div className="Create h-full mt-5">
                        <IconTextComponent
                            iconName={"icon-park-solid:add"}
                            displayText={"Create Playlist"}
                        />
                        <IconTextComponent
                            iconName={"bxs:heart-square"}
                            displayText={"Liked Songs"}
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
            <div className="h-full w-4/5  bg-app-black overflow-auto">

                <div className="navbar bg-black w-full h-1/10  bg-opacity-30 flex items-center justify-end">
                    <div className="w-1/2 h-full flex">
                        <div className="w-3/5 flex justify-around items-center">
                            <TextwithHover displayText={"Premium"} />
                            <TextwithHover displayText={"Support"} />
                            <TextwithHover displayText={"Download"} />
                            < div className="border-r border-white h-1/2"></div>
                        </div>
                        <div className="w-2/5 flex h-full items-center justify-around">
                            <TextwithHover displayText={"Sign up"} />
                            <div className="bg-white h-2/3 px-8  flex items-center justify-center rounded-full font-semibold cursor-pointer"> <Link className="h-full flex items-center" to="/login">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content p-8 pt-0 overflow-auto">
                    <PlaylistView titleText={"Focus"} cardData={focusCardsData} />
                    <PlaylistView titleText={"Spotify Playlist"} cardData={spotifyPlaylistcardData} />
                    <PlaylistView titleText={"Sound Of India"} cardData={soundOfIndiaCardsData} />
                </div>
            </div>
        </div>
    );
}
const PlaylistView = ({ titleText, cardData }) => {
    return (
        <div className="content text-white h-9/10 mt-8">
            <div className="text-xl font-bold flex flex-row justify-between mb-5">
                <div className="">{titleText}</div>
            </div>
            <div className="w-full h-1/3 flex justify-between space-x-4">

                {
                    // cardData will be an array
                    cardData.map((item) => {
                        return <CardView
                            title={item.title}
                            description={item.description}
                            imgUrl={item.imgUrl}
                        />
                    })
                }
                {/* 
                <CardView title={"Todays Top Hits"} description={"Benson Noone is on top of the Hottest 50!"}
                    imgUrl={"https://c.saavncdn.com/925/Maharani-Hindi-2021-20220211204609-500x500.jpg"} />
                <CardView title={"Todays Top Hits"} description={"Benson Noone is on top of the Hottest 50!"}
                    imgUrl={"https://c.saavncdn.com/925/Maharani-Hindi-2021-20220211204609-500x500.jpg"}
                />
                <CardView title={"Todays Top Hits"} description={"Benson Noone is on top of the Hottest 50!"} imgUrl={"https://c.saavncdn.com/925/Maharani-Hindi-2021-20220211204609-500x500.jpg"} />
                <CardView title={"Todays Top Hits"} description={"Benson Noone is on top of the Hottest 50!"}
                    imgUrl={"https://c.saavncdn.com/925/Maharani-Hindi-2021-20220211204609-500x500.jpg"}
                />
                <CardView title={"Todays Top Hits"} description={"Benson Noone is on top of the Hottest 50!"} imgUrl={"https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452"} /> */}

            </div>
        </div>

    );
};
const CardView = ({ title, description, imgUrl }) => {
    return (
        <div className="bg-black bg-opacity-60 w-1/5 p-4 rounded-lg hover:bg-gray-900">
            <div className="pb-4 pt-2">
                <img className="w-full rounded-md my-2" src={imgUrl} alt="label"></img>
            </div>
            <div className="text-white text-sm font-semibold">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    );
};


export default HomeComponent;

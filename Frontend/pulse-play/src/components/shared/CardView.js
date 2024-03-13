export const CardView = ({ title, description, imgUrl }) => {
    return (
        <div className="bg-black bg-opacity-60 w-full p-4 rounded-lg hover:bg-gray-900">
            <div className="pb-4 pt-2">
                <img className="w-full rounded-md my-2" src={imgUrl} alt="label"></img>
            </div>
            <div className="text-white text-sm font-semibold cursor-pointer">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    );
};

import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const IconTextComponent = ({ iconName, displayText, active, targetLink, onClick }) => {
    return <div className="flex items-center justifiy-start cursor-pointer" onClick={onClick} >
        <Link to={targetLink} className="flex items-center justfy-start">
            <div className="px-5 py-2 hover:text-white">
                <Icon icon={`${iconName}`} color={active ? "white" : "gray"} fontSize="30"></Icon>
            </div>

            <div className={`${active ? "text-white" : "text-gray-400"} text-sm font-semibold hover:text-white`} >
                {displayText}
            </div>
        </Link>
    </div >
}

export default IconTextComponent; 

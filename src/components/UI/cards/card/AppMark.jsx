import React from 'react';
import {HiStar} from "react-icons/hi";

const AppMark = ({...props}) => {
    return (
        <div className="
        flex items-center
        justify-center gap-1 py-1 px-2
        bg-[#151310] bg-opacity-70
        text-sm
        text-[#E5E6EB] rounded-full">
            <p>{props.mark}</p>
            <HiStar size={18}/>
        </div>
    );
};

export default AppMark;
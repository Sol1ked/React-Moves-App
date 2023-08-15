import React from 'react';
import {HiStar} from "react-icons/hi";

const AppMark = ({...props}) => {
    return (
        <div className="
        flex items-center
        justify-center gap-0.5 py-0.5 px-1.5
        bg-[#151310] bg-opacity-70
        text-xs text-[#E5E6EB]
        rounded-full">
            <p>{props.mark}</p>
            <HiStar size={16}/>
        </div>
    );
};

export default AppMark;
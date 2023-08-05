import React from 'react';
import {HiStar} from "react-icons/hi";

const AppMark = () => {
    return (
        <div className="
        flex items-center
        justify-center gap-1 py-1 px-2
        bg-[#151310] bg-opacity-70
        text-sm mt-4
        text-[#E5E6EB] rounded-full">
            <p>3.0</p>
            <HiStar size={18}/>
        </div>
    );
};

export default AppMark;
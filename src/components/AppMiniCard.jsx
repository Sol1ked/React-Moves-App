import React from 'react';
import AppMark from "../components/AppMark.jsx";

const AppMiniCard = () => {
    return (
        <div className="flex gap-3 pt-6">
            <img src="../../src/assets/cardImageMini.jpg" className="max-w-[56px] rounded" alt="/"/>
            <div className="flex flex-col items-start">
                <p className="text-[#FFFFFF] text-base ">Бабадук</p>
                <p className="mt-2 text-sm
                                text-[#ABABAB]">Ужасы/Триллер</p>
                <AppMark/>
            </div>
        </div>
    );
};

export default AppMiniCard;
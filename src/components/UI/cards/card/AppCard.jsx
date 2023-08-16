import React from 'react';
import AppMark from "../card/AppMark.jsx";

const AppCard = ({card, type}) => {
    const cardWidth = type ? 'w-[270px]' : 'w-[200px]';
    const imageHeight = type ? 'h-[180px]' : 'h-[280px]';

    return (
        <div className={`${cardWidth} rounded relative cursor-pointer`}>
            <div className="absolute right-[2%] top-[2%]">
                <AppMark mark={4.2}/>
            </div>
            <img
                src={card?.poster}
                alt="img"
                className={`${imageHeight} object-cover rounded-lg w-full`}
            />
            <div className="flex flex-col mt-3 font-bold">
                <h3 className="text-[#E5E6EB] text-base truncate">{card?.title}</h3>
                <p className="text-[#ABABAB] text-sm">{card?.production_year}</p>
            </div>
        </div>
    );
};

export default AppCard;
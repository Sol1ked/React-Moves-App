import React from 'react';
import AppMark from "./AppMark";

const AppWatchedCard = ({card}) => {
    return (
        <div className="w-full h-full relative">
            <div className="absolute right-4 top-4">
                <AppMark mark={4.2}/>
            </div>
            <img src="src/assets/example.jpg" alt="image" className="rounded-lg"/>
            <div className="flex flex-col mt-3">
                <h3 className="text-[#E5E6EB]">{card.title}</h3>
                <p className="text-[#ABABAB]">{card.text}</p>
            </div>
        </div>
    );
};

export default AppWatchedCard;
import React, {useState} from 'react';
import AppWatchedCard from "./card/AppWatchedCard.jsx";
import AppCarouselSlider from "../sliders/AppCarouselSlider";

const AppCardsList = ({children, type, cards}) => {
    return (
        <div className="mt-12 relative flex flex-col">
            <h2 className="text-[#E5E6EB] text-4xl font-bold">{children}</h2>
            <div className="flex flex-wrap mt-12 justify-center gap-x-4">
                <AppCarouselSlider slides={cards} type={type}/>
            </div>
        </div>
    );
};

export default AppCardsList;
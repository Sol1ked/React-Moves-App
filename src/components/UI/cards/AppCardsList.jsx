import React, {useState} from 'react';
import AppWatchedCard from "./card/AppWatchedCard.jsx";
import AppCarouselSlider from "../sliders/AppCarouselSlider";

const AppCardsList = ({children, type, cards}) => {
    return (
        <div className="mt-12 relative flex flex-col gap-y-12 w-full">
            <h2 className="text-[#E5E6EB] text-4xl font-bold">{children}</h2>
            <AppCarouselSlider slides={cards} type={type}/>
        </div>
    );
};

export default AppCardsList;
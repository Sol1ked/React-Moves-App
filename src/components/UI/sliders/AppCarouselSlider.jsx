import React, {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import AppWatchedCard from "../cards/card/AppWatchedCard.jsx";

const AppCarouselSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const stepWidth = 1300;
    const limitScroll = Math.round(slides.length / 4) - 1;

    const canScrollLeft = currentIndex > 0;
    const canScrollRight = currentIndex <= limitScroll;

    const handleSlideChange = (increment) => {
        if ((increment > 0 && canScrollRight) || (increment < 0 && canScrollLeft)) {
            setCurrentIndex((currentIndex + increment + slides.length) % slides.length);
        }
    };

    const showArrows = slides.length > 4;

    return (
        <div className="h-full w-full rounded-lg overflow-hidden group">
            <div className="carousel-container relative w-full h-full overflow-hidden">
                <div
                    className="flex w-full gap-x-6 justify-start h-full transition-transform duration-500 ease-in-out transform relative"
                    style={{transform: `translateX(-${currentIndex * stepWidth}px)`}}>
                    {slides.map((slide) => (
                        <div key={slide.id} className="flex-shrink-0">
                            <AppWatchedCard card={slide}/>
                        </div>
                    ))}
                </div>
                {showArrows && (
                    <div className="group">
                        {/* Левая стрелка */}
                        {canScrollLeft && (
                            <div
                                className="absolute top-[40%] -translate-y-1/2 left-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer group-hover:block"
                                onClick={() => handleSlideChange(-1)}>
                                <BsChevronCompactLeft size={15}/>
                            </div>
                        )}
                        {/* Правая стрелка */}
                        {canScrollRight && (
                            <div
                                className="absolute top-[40%] -translate-y-1/2 right-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer group-hover:block"
                                onClick={() => handleSlideChange(1)}>
                                <BsChevronCompactRight size={15}/>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AppCarouselSlider;
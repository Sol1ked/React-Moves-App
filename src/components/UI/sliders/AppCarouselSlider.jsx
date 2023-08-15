import React, {useState, useRef, useEffect} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import AppCard from "../cards/card/AppCard.jsx";
import AppArrow from "../sliders/AppArrow.jsx";

const AppCarouselSlider = ({slides, type}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef(null);

    const stepWidth = 1128;
    const limitScroll = Math.ceil(containerWidth / stepWidth);
    const canScrollRight = currentIndex <= limitScroll;
    const canScrollLeft = currentIndex > 0;

    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.getBoundingClientRect().width);
        }
    }, []);

    const handleSlideChange = (increment) => {
        if ((increment > 0 && canScrollRight) || (increment < 0 && canScrollLeft)) {
            setCurrentIndex((currentIndex + increment + slides.length) % slides.length);
        }
    };

    const showArrows = slides.length > 4;

    return (
        <div className="h-full w-full">
            {slides.length &&
                <div className=" flex items-center justify-center rounded-lg overflow-hidden group">
                    {showArrows && (
                        <div className="w-12 flex items-center justify-center">
                            <AppArrow canScroll={canScrollLeft} direction="left" onClick={() => handleSlideChange(-1)}/>
                        </div>
                    )}
                    <div className="carousel-container overflow-hidden">
                        <div
                            className={`flex w-full ${type ? 'gap-x-[13.5px]' : 'gap-x-7'} justify-start h-full transition-transform duration-700 ease-in-out transform relative`}
                            style={{transform: `translateX(-${currentIndex * stepWidth}px)`}}
                            ref={containerRef}
                        >
                            {slides.map((slide) => (
                                <div key={slide.id} className="">
                                    <AppCard type={type} card={slide}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    {showArrows && (
                        <div className="w-12 flex items-center justify-center">
                            <AppArrow canScroll={canScrollRight} direction="right"
                                      onClick={() => handleSlideChange(1)}/>
                        </div>
                    )}
                </div>
            }
        </div>
    )
        ;
};

export default AppCarouselSlider;






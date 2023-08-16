import React, {useState, useRef, useEffect} from 'react';
import AppCard from "../cards/card/AppCard.jsx";
import AppArrow from "../sliders/AppArrow.jsx";

const AppCarouselSlider = ({slides, type}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(1200);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.getBoundingClientRect().width);
        }
    }, []);

    const stepWidth = containerWidth;
    const limitScroll = Math.ceil(containerWidth / stepWidth);
    const canScrollRight = currentIndex <= limitScroll;
    const canScrollLeft = currentIndex > 0;

    const handleSlideChange = (increment) => {
        if ((increment > 0 && canScrollRight) || (increment < 0 && canScrollLeft)) {
            setCurrentIndex((currentIndex + increment + slides.length) % slides.length);
        }
    };

    return (

        <div className="h-full w-full select-none max-w-[1200px]">
            {slides?.length > 0 &&
                <div>
                    <div className="overflow-hidden">
                        <div
                            className="flex gap-x-11 justify-between transition-transform duration-700 ease-in-out transform relative"
                            style={{transform: `translateX(-${currentIndex * stepWidth}px)`}}
                            ref={containerRef}
                        >
                            {slides.map((slide) => (
                                <div
                                    key={slide.id}
                                >
                                    <AppCard type={type} card={slide}/>
                                </div>))}
                        </div>
                    </div>
                    <div
                        className="absolute right-0 top-1/2 justify-between w-full flex items-center rounded-lg overflow-hidden group">
                        <div className="w-12 flex items-center justify-center">
                            {canScrollLeft &&
                                <AppArrow
                                    canScroll={canScrollLeft}
                                    direction="left"
                                    onClick={() => handleSlideChange(-1)}
                                />
                            }
                        </div>
                        <div className="w-12 h-12 flex items-center justify-center">
                            {canScrollRight &&
                                <AppArrow
                                    canScroll={canScrollRight}
                                    direction="right"
                                    onClick={() => handleSlideChange(1)}/>
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default AppCarouselSlider;



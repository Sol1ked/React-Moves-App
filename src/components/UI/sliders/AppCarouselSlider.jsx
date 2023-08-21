import React, {useState, useRef, useEffect} from 'react';
import AppCard from "../cards/card/AppCard.jsx";
import AppArrow from "../sliders/AppArrow.jsx";

const AppCarouselSlider = ({slides, type}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.getBoundingClientRect().width);
        } else {
            console.log('error')
        }
    }, [containerRef.current]);

    const limitScroll = Math.floor(slides?.length / 6);
    const canScrollRight = currentIndex < limitScroll;
    const canScrollLeft = currentIndex > 0;

    const handleSlideChange = (increment) => {
        if ((increment > 0 && canScrollRight) || (increment < 0 && canScrollLeft)) {
            setCurrentIndex((currentIndex + increment + slides.length) % slides.length);
        }
    };

    return (

        <div className="select-none w-full m-auto group">
            {slides?.length > 0 &&
                <div className="flex items-center justify-between">
                    <div className="overflow-hidden">
                        <div
                            className={`${type ? 'gap-x-6' : 'gap-x-12'}  flex justify-start transition-transform duration-1000 ease-in-out transform relative`}
                            style={{transform: `translateX(-${currentIndex * containerWidth}px)`}}
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
                    <div className="absolute flex justify-between w-full">
                        <div className="w-12 h-12 flex items-center justify-center">
                            {canScrollLeft &&
                                <AppArrow
                                    canScroll={canScrollLeft}
                                    direction="left"
                                    onClick={() => handleSlideChange(-1)}
                                />
                            }
                        </div>
                        {canScrollRight &&
                            <div className="w-12 h-12">
                                <AppArrow
                                    canScroll={canScrollRight}
                                    direction="right"
                                    onClick={() => handleSlideChange(1)}/>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default AppCarouselSlider;



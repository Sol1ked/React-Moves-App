import React, {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";

const AppCarouselSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(currentIndex)
    const stepWidth = 420;

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    };
    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    };
    return (
        <div className="max-w-[480px] h-[70px] w-full rounded-lg overflow-hidden relative group">
            <div className="carousel-container relative w-full h-full">
                <div
                    className="flex gap-x-6 justify-center h-full transition-transform duration-500 ease-in-out transform"
                    style={{transform: `translateX(-${currentIndex * stepWidth}px)`}}>
                    {slides.map((slide) => (
                        <div key={slide.id} className="flex-shrink-0 w-[120px] relative">
                            <div className="absolute inset-0 bg-cover bg-center rounded-2xl"
                                 style={{backgroundImage: `url('${slide.imgSrc}')`}}>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute w-full h-full top-0">
                {/* Левая стрелка */}
                <div
                    className="absolute top-[50%] group-hover:block -translate-y-1/2 left-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactLeft size={10} onClick={prevSlide}/>
                </div>
                {/* Правая стрелка */}
                <div
                    className="absolute top-[50%] group-hover:block -translate-y-1/2 right-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactRight onClick={nextSlide} size={10}/>
                </div>
            </div>
        </div>
    );
};

export default AppCarouselSlider;
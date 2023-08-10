import React, {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import AppButton from "../UI/AppButton.jsx";

const Slider = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const predSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    return (
        <div className="max-w-[1200px] h-[680px] w-full m-auto py-16 px-4 relative group">
            <div style={{backgroundImage: `url(${slides[currentIndex].imgSrc})`}}
                 className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative">
                {/*Левая стрелка*/}
                <div
                    className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactLeft onClick={predSlide} size={30}/>
                </div>
                {/*Правая стрелка*/}
                <div
                    className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactRight onClick={nextSlide} size={30}/>
                </div>
                <div className="flex items-end absolute px-12  bottom-12 w-full justify-between">
                    <div className="text-white flex flex-col gap-6">
                        <h1 className="text-5xl font-bold">{slides[currentIndex].text}</h1>
                        <p className="text-sm font-bold">2013 г. Романтика / Научная фантастика</p>
                        <AppButton btnText="Смотреть" type="tertiary"/>
                    </div>
                    <div className="flex items-center gap-4">
                        {slides.map(slide => (
                            <div key={slide.id}
                                 className={`w-[120px] duration-150 h-[70px] rounded-2xl bg-center bg-cover ${slide.id === slides[currentIndex].id ? 'border-4 border-white/75' : 'border-none'}`}
                                 style={{backgroundImage: `url(${slide.imgSrc})`}}>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
import React, {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import AppButton from "../UI/AppButton.jsx";

const Slider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <div>
            {slides.length &&
                <div>
                    <div className="max-w-[1224px] select-none h-[550px] w-full m-auto relative group">
                        <div style={{backgroundImage: `url(${slides[currentIndex].poster})`}}
                             className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative">
                            {/*Левая стрелка*/}
                            <div
                                className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                                <BsChevronCompactLeft size={20}/>
                            </div>
                            {/*Правая стрелка*/}
                            <div
                                className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                                <BsChevronCompactRight onClick={nextSlide} size={20}/>
                            </div>
                            <div className="flex items-end absolute px-12  bottom-12 w-full justify-between">
                                <div className="text-white flex flex-col gap-6">
                                    <h1 className="text-5xl font-bold">{slides[currentIndex].title}</h1>
                                    <p className="text-sm font-bold"></p>
                                    <AppButton btnText="Смотреть" type="tertiary"/>
                                </div>
                                <div className="flex items-center gap-4">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Slider;
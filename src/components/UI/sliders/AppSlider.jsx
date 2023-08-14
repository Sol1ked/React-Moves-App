import React, {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import AppButton from "../AppButton";


const AppSlider = ({movies}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        const isLastSlide = currentIndex === movies.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const presSlide = () => {
        const isLastSlide = currentIndex === 0;
        const newIndex = isLastSlide ? movies.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const changeSlide = (i) => {
        setCurrentIndex(i)
    }

    return (
        <div>
            {movies.length &&
                <div className="select-none h-[550px] w-full m-auto relative group">
                    <div style={{backgroundImage: `url(${movies[currentIndex].poster})`}}
                         className="w-full h-full rounded-2xl bg-center bg-cover duration-700 relative">
                        {/*Левая стрелка*/}
                        <div
                            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                            <BsChevronCompactLeft onClick={presSlide} size={20}/>
                        </div>
                        {/*Правая стрелка*/}
                        <div
                            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                            <BsChevronCompactRight onClick={nextSlide} size={20}/>
                        </div>
                        <div className="flex items-end absolute px-12  bottom-12 w-full justify-between">
                            <div className="text-white flex flex-col gap-6">
                                <h1 className="text-5xl font-bold">{movies[currentIndex].title}</h1>
                                <p className="text-sm font-bold"></p>
                                <AppButton btnText="Смотреть" type="tertiary"/>
                            </div>
                            <div className="flex items-center gap-4">
                                {movies.map((slide, index) => (
                                    <div
                                        key={slide.id}
                                        onClick={() => changeSlide(index)}
                                        className={`w-[120px] bg-center bg-cover cursor-pointer rounded-2xl h-[70px] ${index === currentIndex ? 'border-4 border-gray' : 'border-none'}`}
                                        style={{backgroundImage: `url(${slide.poster})`}}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default AppSlider;
import React from 'react';
import {FiSearch} from "react-icons/fi";
import useMoviesLoader from "../../../hooks/useMoviesLoader.js";
import AppInput from "../AppInput.jsx";

const AppSearch = () => {
    const apiResponses = ['/api/v1/films']
    const movies = useMoviesLoader(apiResponses)
    return (
        <div
            className="flex justify-center items-center w-full bg-[#1C1D22] border-b-[#292A2F] border-b-[1px] h-32">
            <div
                className="flex items-center gap-2 border-[1px] border-[#60606C] border-b-0 w-[350px] bg-[#1E1F24] px-5 py-2.5 rounded-2xl rounded-b-none relative">
                <FiSearch size={24} color='#60606C' cursor="pointer"/>
                <AppInput type="text" className="bg-[#1C1D22] placeholder-[#60606C] outline-none text-[#fff]"
                          placeholder="Поиск..."/>
            </div>
            <div
                className="absolute top-[86px] p-5 pt-0 border-[1px] border-[#60606C] rounded-t-none rounded-2xl border-t-0 h-[500px] z-10 max-w-[350px] w-full h-auto bg-[#1E1F24] ">
                <div className="flex flex-col gap-4 text-base">
                    <div>sdfsdf</div>
                    <div>sdss</div>
                    <div>s</div>
                    <div>sss</div>
                    <div>sfds</div>
                    <div>ssdfes</div>
                    <div>sdsdffsdf</div>
                    <div>sdsdf</div>
                </div>
            </div>
        </div>
    )
        ;
};

export default AppSearch;
import React from 'react';
import {FiSearch} from "react-icons/fi";

const AppSearch = () => {
    return (
        <div
            className="flex justify-center items-center w-full bg-[#1C1D22]  border-b-[#292A2F] border-b-[1px] h-32">
            <div className="flex gap-2 border-2 border-[#60606C] px-6 py-3 rounded-full">
                <FiSearch size={24} color='#60606C' cursor="pointer"/>
                <input type="text" className="bg-[#1C1D22] placeholder-[#60606C] outline-none text-[#fff]"
                       placeholder="Поиск..."/>
            </div>
        </div>
    );
};

export default AppSearch;
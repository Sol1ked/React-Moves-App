import React from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";

const AppArrow = ({direction, onClick}) => {
    let className = 'text-[#333] hover:text-[#fff] transition-colors duration-600 text-2xl cursor-pointer group-hover:block'

    return (
        <div
            className='text-2xl w-full flex items-center justify-center'>
            {direction === 'left'
                ? (
                    <BsChevronCompactLeft
                        size={45}
                        className={className}
                        onClick={onClick}
                    />
                )
                : (
                    <BsChevronCompactRight
                        size={45}
                        className={className}
                        onClick={onClick}
                    />
                )}
        </div>
    );
};
export default AppArrow;
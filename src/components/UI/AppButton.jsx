import React from 'react';

const AppButton = ({type, btnText, isLoading, ...props}) => {
    const nameClass = ' cursor-pointer mt-12 px-6 py-3 w-full outline-none rounded-xl text-base  text-center text-[#fff] flex justify-center'

    const primary = 'text-[#fff] bg-[#D32125]'

    const secondary = 'text-[#D52026] bg-[#1C1D22] border-2 border-[#D52026]'

    const tertiary = 'text-[#fff] bg-[#D32125] shadow-[0px_0px_10px_2px_rgba(211,33,37,0.75)]'

    const getButtonClass = () => {
        switch (type) {
            case 'primary':
                return primary + nameClass
            case 'secondary':
                return secondary + nameClass
            case 'tertiary':
                return tertiary + nameClass
            default:
                return nameClass
        }
    }
    return (
        <button
            {...props}
            className={`${getButtonClass()}`}>
            {isLoading
                ? <span className="loading loading-dots loading-md"></span>
                : btnText}
        </button>
    );
}
export default AppButton;
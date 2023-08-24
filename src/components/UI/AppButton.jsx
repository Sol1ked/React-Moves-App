import React from 'react';
import {useLoading} from "../../hoc/LoadingProvider.jsx";

const AppButton = ({type, btnText, ...props}) => {
    const {isLoading} = useLoading();

    const nameClass = ' cursor-pointer px-6 py-3 outline-none rounded-xl text-base  text-center text-[#fff] flex justify-center'
    const primary = 'text-[#fff] bg-[#D32125] w-full'
    const secondary = 'text-[#D52026] bg-[#1C1D22] border-2 border-[#D52026]'
    const tertiary = 'text-[#fff] bg-[#D32125] max-w-[140px]'

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
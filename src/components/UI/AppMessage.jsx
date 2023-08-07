import React, {useEffect, useState} from 'react';
import {BsCheckCircle} from "react-icons/bs";
import {AiOutlineCloseCircle} from "react-icons/ai"

const AppMessage = ({type, onCloseModal, messageText, message, ...props}) => {
    const [icon, setIcon] = useState(null)
    const getPopupClass = () => {
        switch (type) {
            case 'error' :
                setIcon(<AiOutlineCloseCircle size={24} className="text-red-700"/>)
                break;
            case 'success' :
                setIcon(<BsCheckCircle size={24} className="text-green-700"/>)
                break;
            default:
                setIcon('')
        }
    }

    useEffect(() => {
        getPopupClass()
    }, [type])

    return (
        <div
            {...props}
            className={`
                absolute top-4 
                ${type === 'error'
                ? 'border-red-700'
                : 'border-green-700'}
                border-l-[6px] 
                flex items-stretch bg-[#1C1D22] 
                rounded left-0 gap-4 justify-between
            `}>
            <div className="flex items-center gap-2 p-2">
                {icon}
                <div>
                    <p className="text-base text-[#fff]">{message}</p>
                    <p className="text-xs">{messageText}</p>
                </div>
            </div>
            <div
                className="cursor-pointer text-xs flex items-center shrink-2 py-2 px-3 border-l-[1px] border-zinc-600">
                <p onClick={() => onCloseModal()}
                >Закрыть</p>
            </div>
        </div>
    );
};

export default AppMessage;
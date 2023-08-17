import React from 'react';
import {Link, useMatch} from "react-router-dom";

const AppCustomLink = ({children, to, icon, ...props}) => {
    const match = useMatch(to)
    return (
        <div
            className={`border-l-4 ${match ? 'border-l-[#D32125]' : 'border-l-[#1C1D22]'} hover:bg-[#292A2F] duration-500 flex items-center gap-x-4 px-10 w-full`}>
            <i className={match ? 'text-[#D32125]' : 'text-[#60606C]'}>{icon}</i>
            <Link
                {...props}
                style={{
                    color: match ? '#E5E6EB' : '#60606C'
                }}
                to={to}
            >
                {children}
            </Link>
        </div>
    )
};

export default AppCustomLink;
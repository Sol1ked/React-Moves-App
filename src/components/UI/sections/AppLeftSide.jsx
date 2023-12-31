import React from 'react';
import AppCustomLink from "../AppCustomLink.jsx";

const AppLeftSide = ({menuItems}) => {
    return (
        <div className="w-[300px] min-h-screen border-r-[#292A2F] border-r-[1px] bg-[#1C1D22] py-12">
            <img src="src/assets/logo.svg" alt="logo" className="px-10"/>
            {menuItems.map(mItem => (
                <div key={mItem.id} className="flex flex-col items-start mt-12 text-[#60606C]">
                    <span className="px-10">{mItem.title}</span>
                    {mItem.items.map(item => (
                        <div key={item.id}
                             className="flex flex-col mt-8 w-full">
                            <AppCustomLink
                                icon={item.icon}
                                to={item.route}
                            >
                                {item.title}
                            </AppCustomLink>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default AppLeftSide;
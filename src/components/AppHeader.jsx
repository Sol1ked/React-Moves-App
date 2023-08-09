import React from 'react';
import {Link} from "react-router-dom";
import AppSearch from "./UI/AppSearch.jsx";
import AppMiniCardsList from "./AppMiniCardsList.jsx";

const AppHeader = ({menuItems}) => {
    return (
        <header className="flex w-full max-w-[1800px] fixed w-full min-h-screen">
            {/*Меню слева*/}
            <div className="bg-[#1C1D22] w-3/12 p-12 border-r-[#292A2F] border-r-[1px] ">
                <img src="../../src/assets/logo.svg" alt="logo" className="pl-10"/>
                {menuItems.map(item =>
                    <div key={item.id} className="flex flex-col gap-9 mt-12">
                        <span className="text-[#60606C] text-sm px-11">{item.title}</span>
                        <ul className="flex flex-col gap-y-8">
                            {item.items.map(itemInItem =>
                                <div key={itemInItem.id} className="w-full flex gap-x-10">
                                    <div
                                        className={`border-l-4 ${itemInItem.active ? 'border-l-[#D32125]' : 'border-l-[#1C1D22]'} h-[22px] rounded`}></div>
                                    <Link to={itemInItem?.route}
                                          className={`${itemInItem.active ? 'text-[#E5E6EB]' : 'text-[#60606C]'}  cursor-pointer text-base flex items-center gap-x-4`}>
                                        <i className={`${itemInItem.active ? 'text-[#D32125]' : 'text-[#60606C]'}`}>{itemInItem.icon}</i> {itemInItem.title}
                                    </Link>
                                </div>
                            )}
                        </ul>
                    </div>
                )}
            </div>
            {/*Меню слева*/}
            {/*Поиск*/}
            <AppSearch/>
            {/*Поиск*/}
            <div className="bg-[#1C1D22] w-3/12 border-l-[#292A2F] border-l-[1px] p-12">
                <AppMiniCardsList/>
            </div>
        </header>
    );
};

export default AppHeader;
import React from 'react';
import {Link} from "react-router-dom";
import AppSearch from "./UI/AppSearch.jsx";
import AppMiniCardsList from "./AppMiniCardsList.jsx";

const AppHeader = ({menuItems}) => {
        return (
            <header className="flex w-screen flex fixed min-h-screen top-0 max-w-[1800px]">
                {/*Меню слева*/}
                <div
                    className="bg-[#1C1D22] w-3/12 flex flex-col items-start py-12 h-screen  max-w-[280px] border-r-[#292A2F] border-r-[1px] ">
                    <img src="../../src/assets/logo.svg" alt="logo" className="px-10"/>
                    {menuItems.map(item =>
                        <div key={item.id} className=" flex flex-col gap-9 mt-12 w-full">
                            <span className=" text-[#60606C] text-sm px-11">{item.title}</span>
                            <ul className="flex flex-col gap-y-8">
                                {item.items.map(itemInItem =>
                                    <div key={itemInItem.id} className="w-full flex gap-x-8">
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
                    )
                    }
                </div>
                {/*Меню слева*/
                }
                {/*Поиск*/
                }
                <AppSearch/>
                {/*Поиск*/
                }
                <div
                    className="bg-[#1C1D22] w-3/12 max-w-[280px] flex flex-col p-12 h-screen border-l-[#292A2F] border-l-[1px]">
                    <AppMiniCardsList/>
                </div>
            </header>
        )
            ;
    }
;

export default AppHeader;
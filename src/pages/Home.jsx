import React, {useState} from 'react';

import {CgHome} from 'react-icons/cg'
import {RiHeart3Line} from 'react-icons/ri'
import {BiHistory} from 'react-icons/bi'
import {BsPerson,} from 'react-icons/bs'
import {GoPeople} from 'react-icons/go'
import {RxExit} from 'react-icons/rx'
import AppSearch from "../components/UI/AppSearch.jsx";
import AppMiniCardsList from "../components/AppMiniCardsList.jsx";
import {useAuth} from "../hooks/useAuth.js";

const Home = () => {
        const [menuItems, setMenuItems] = useState([
            {
                title: 'Меню',
                items: [
                    {id: 1, title: 'Главная', icon: <CgHome size={20}/>, active: true},
                    {id: 2, title: 'Избранное', icon: <RiHeart3Line size={20}/>, active: false},
                    {id: 3, title: 'Просмотренные', icon: <BiHistory size={20}/>, active: false},
                ]
            },
            {
                title: 'Сообщество',
                items: [
                    {id: 1, title: 'Профиль', icon: <BsPerson size={20}/>, active: false},
                    {id: 2, title: 'Друзья', icon: <GoPeople size={20}/>, active: false},
                ]
            },
            {
                title: 'Дополнительно',
                items: [
                    {id: 1, title: 'Выйти', icon: <RxExit size={20}/>, active: false},
                ]
            }
        ])

        const {user} = useAuth()
        console.log(user)

        return (
            <div className="flex">
                {/*Меню слева*/}
                <div className="bg-[#1C1D22] w-[350px] h-screen border-r-[#292A2F] border-r-[1px] py-12">
                    <img src="../../src/assets/logo.svg" alt="logo" className="px-10"/>
                    {menuItems.map(item =>
                        <div className="flex flex-col gap-9 mt-12">
                            <span className="text-[#60606C] text-sm px-11">{item.title}</span>
                            <ul className="flex flex-col gap-y-8">
                                {item.items.map(itemInItem =>
                                    <div className="w-full flex gap-x-10">
                                        <div
                                            className={`border-l-4 ${itemInItem.active ? 'border-l-[#D32125]' : 'border-l-[#1C1D22]'} h-[22px] rounded`}></div>
                                        <li className={`${itemInItem.active ? 'text-[#E5E6EB]' : 'text-[#60606C]'}  cursor-pointer text-base flex items-center gap-x-4`}>
                                            <i className={`${itemInItem.active ? 'text-[#D32125]' : 'text-[#60606C]'}`}>{itemInItem.icon}</i> {itemInItem.title}
                                        </li>
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
                <div className="bg-[#1C1D22] w-[350px] h-screen border-l-[#292A2F] border-l-[1px] p-12">
                    <AppMiniCardsList/>
                </div>
            </div>
        );
    }
;

export default Home;
import React, {useState} from 'react';
import {CgHome} from "react-icons/cg";
import {RiHeart3Line} from "react-icons/ri";
import {BiHistory} from "react-icons/bi";
import {BsPerson} from "react-icons/bs";
import {GoPeople} from "react-icons/go";
import {RxExit} from "react-icons/rx";
import {Link, Outlet,} from "react-router-dom";
import AppLeftSide from "../sections/AppLeftSide";
import AppRightSide from "../sections/AppRightSide";
import AppSearch from "../sections/AppSearch";
import useMoviesLoader from "../../../hooks/useMoviesLoader.js";

const data = [
    {
        id: 1, title: 'Меню', items: [
            {id: 1, title: 'Главная', icon: <CgHome size={20}/>, active: false, route: ''},
            {id: 2, title: 'Избранное', icon: <RiHeart3Line size={20}/>, active: false, route: 'favourite'},
            {id: 3, title: 'Просмотренные', icon: <BiHistory size={20}/>, active: false, route: 'watched'},
        ]
    },
    {
        id: 2, title: 'Сообщество', items: [
            {id: 1, title: 'Профиль', icon: <BsPerson size={20}/>, active: false, route: 'personal'},
            {id: 2, title: 'Друзья', icon: <GoPeople size={20}/>, active: false, route: 'friends'},
        ]
    },
    {
        id: 3, title: 'Дополнительно', items: [
            {id: 1, title: 'Выйти', icon: <RxExit size={20}/>, active: false, route: 'logout'},
        ]
    },]
const Layout = () => {
    const [menuItems, setMenuItems] = useState(data.slice())

    return (
        <div className="w-full min-h-screen h-screen">
            <div className="w-full flex max-w-[1900px] h-full m-auto">
                <AppLeftSide menuItems={menuItems}/>
                <div className="flex flex-col w-full max-w-[1200px] items-center">
                    <AppSearch/>
                    <div className="p-12 w-full">
                        <Outlet/>
                    </div>
                </div>
                <AppRightSide/>
            </div>
        </div>
    );
};

export default Layout;
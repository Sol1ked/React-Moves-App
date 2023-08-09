import React, {useState} from 'react';
import {CgHome} from "react-icons/cg";
import {RiHeart3Line} from "react-icons/ri";
import {BiHistory} from "react-icons/bi";
import {BsPerson} from "react-icons/bs";
import {GoPeople} from "react-icons/go";
import {RxExit} from "react-icons/rx";
import {Link, Outlet,} from "react-router-dom";
import {useAuth} from "../hooks/useAuth.js";
import AppHeader from "../components/AppHeader.jsx";

const data = [{
    id: 1, title: 'Меню', items: [{id: 1, title: 'Главная', icon: <CgHome size={20}/>, active: true}, {
        id: 2, title: 'Избранное', icon: <RiHeart3Line size={20}/>, active: false
    }, {id: 3, title: 'Просмотренные', icon: <BiHistory size={20}/>, active: false},]
}, {
    id: 2,
    title: 'Сообщество',
    items: [{id: 1, title: 'Профиль', icon: <BsPerson size={20}/>, active: false, route: '/personal'}, {
        id: 2, title: 'Друзья', icon: <GoPeople size={20}/>, active: false
    },]
}, {
    id: 3, title: 'Дополнительно', items: [{id: 1, title: 'Выйти', icon: <RxExit size={20}/>, active: false},]
}]
const Layout = () => {
    const [menuItems, setMenuItems] = useState(data.slice())
    return (<>
        <div className="flex min-h-screen justify-center m-auto">
            <AppHeader menuItems={menuItems}/>
            <main className="pt-52 flex justify-center w-full px-20 h-full max-w-[1154px]">
                <Outlet/>
            </main>
        </div>
    </>);
};

export default Layout;
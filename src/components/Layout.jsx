import React, {useState} from 'react';
import {CgHome} from "react-icons/cg";
import {RiHeart3Line} from "react-icons/ri";
import {BiHistory} from "react-icons/bi";
import {BsPerson} from "react-icons/bs";
import {GoPeople} from "react-icons/go";
import {RxExit} from "react-icons/rx";
import {Link, Outlet,} from "react-router-dom";
import AppHeader from "../components/AppHeader.jsx";
import AppMessage from "../components/UI/AppMessage.jsx";
import {useRequestManager} from "../hooks/useRequestManager.js";

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
    const {modal, closeModal} = useRequestManager();
    return (
        <>
            <div className="flex justify-center m-auto h-screen  max-w-[1240px] w-full">
                {modal.isOpen &&
                    <AppMessage
                        type={modal.type}
                        message={modal.type}
                        messageText={modal.message}
                        closeModal={closeModal}
                    />
                }
                <AppHeader menuItems={menuItems}/>
                <div className="w-full">
                    <div className="z-10 flex mt-44 justify-centers px-12">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>);
};

export default Layout;
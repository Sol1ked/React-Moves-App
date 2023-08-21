import React, {useState} from 'react';
import {CgHome} from "react-icons/cg";
import {RiHeart3Line} from "react-icons/ri";
import {BiHistory} from "react-icons/bi";
import {BsPerson} from "react-icons/bs";
import {GoPeople} from "react-icons/go";
import {RxExit} from "react-icons/rx";
import {Outlet, useNavigate,} from "react-router-dom";
import AppLeftSide from "../sections/AppLeftSide";
import AppRightSide from "../sections/AppRightSide";
import AppSearch from "../sections/AppSearch";
import {useLoading} from "../../../hooks/useLoading";
import AppMessage from "../AppMessage.jsx";
import AppButton from "../AppButton.jsx";

const data = [{
    id: 1,
    title: 'Меню',
    items: [{id: 1, title: 'Главная', icon: <CgHome size={20}/>, active: false, route: ''}, {
        id: 2,
        title: 'Избранное',
        icon: <RiHeart3Line size={20}/>,
        active: false,
        route: 'favourite'
    }, {id: 3, title: 'Просмотренные', icon: <BiHistory size={20}/>, active: false, route: 'watched'},]
}, {
    id: 2,
    title: 'Сообщество',
    items: [{id: 1, title: 'Профиль', icon: <BsPerson size={20}/>, active: false, route: 'personal'}, {
        id: 2,
        title: 'Друзья',
        icon: <GoPeople size={20}/>,
        active: false,
        route: 'friends'
    },]
}, {
    id: 3,
    title: 'Дополнительно',
    items: [{id: 1, title: 'Выйти', icon: <RxExit size={20}/>, active: false, route: 'logout'},]
},]
const Layout = () => {
    const [menuItems, setMenuItems] = useState(data.slice())
    const {isLoading, notification, hideNotification} = useLoading();

    return (
        <div className="w-full h-full">
            <div className="w-full min-h-screen flex justify-center">
                {notification.isOpen &&
                    <AppMessage
                        type={notification.type}
                        message={notification.type}
                        messageText={notification.message}
                        closeModal={hideNotification}
                    />
                }
                <AppLeftSide menuItems={menuItems}/>
                <div className="w-full max-w-[1300px]">
                    <AppSearch/>
                    <div className="p-12">
                        {isLoading
                            ?
                            <div>
                                <h1>Идет загрузка...</h1>
                            </div>
                            : <Outlet/>}
                    </div>
                </div>
                <AppRightSide/>
            </div>
        </div>
    );
};

export default Layout;
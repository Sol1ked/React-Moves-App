import React from 'react';
import AppMiniCard from "../components/AppMiniCard.jsx";
import AppButton from "../components/UI/AppButton.jsx";

const AppMiniCardsList = () => {
    return (
        <div className="flex flex-col">
            <h2 className="text-xl font-bold text-[#FFFFFF]">Популярное</h2>
            <AppMiniCard/>
            <AppMiniCard/>
            <AppMiniCard/>
            {/*<AppButton type="primary" btnText="Посмотреть ещё"/>*/}
            {/*<AppButton type="secondary" btnText="Посмотреть ещё"/>*/}
            {/*<AppButton type="tertiary" btnText="Посмотреть ещё"/>*/}
            <AppButton btnText="Посмотреть ещё"/>
        </div>
    );
};

export default AppMiniCardsList;
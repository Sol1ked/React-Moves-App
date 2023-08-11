import React from 'react';
import AppMiniCard from "../components/AppMiniCard.jsx";
import AppButton from "../components/UI/AppButton.jsx";

const AppMiniCardsList = () => {
    return (
        <div className="flex flex-col items-start gap-y-4">
            <h2 className="text-xl font-bold text-[#FFFFFF]">Популярное</h2>
            <AppMiniCard/>
            <AppMiniCard/>
            <AppMiniCard/>
            <AppButton btnText="Посмотреть ещё"/>
        </div>
    );
};

export default AppMiniCardsList;
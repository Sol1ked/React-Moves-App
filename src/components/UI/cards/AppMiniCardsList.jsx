import React from 'react';
import AppMiniCard from "../cards/card/AppMiniCard";
import AppButton from "../../UI/AppButton.jsx";

const AppMiniCardsList = ({movies}) => {
    if (!movies) {
        return (<h1>Error</h1>)
    }
    return (
        <div className="flex flex-col items-start gap-y-4">
            <h2 className="text-xl font-bold text-[#FFFFFF]">Популярное</h2>
            {movies.map(movie => (<AppMiniCard movie={movie} key={movie.id} genres={movie.genres}/>))}
            <AppButton btnText="Посмотреть ещё"/>
        </div>
    );
};

export default AppMiniCardsList;
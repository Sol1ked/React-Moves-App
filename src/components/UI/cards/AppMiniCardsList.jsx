import React from 'react';
import AppMiniCard from "../cards/card/AppMiniCard";
import AppButton from "../../UI/AppButton.jsx";
import {useLoading} from "../../../hooks/useLoading.js";

const AppMiniCardsList = ({movies}) => {
    const {isLoading} = useLoading()

    return (
        <div className="flex flex-col items-start gap-y-4">
            <h2 className="text-xl font-bold text-[#FFFFFF]">Популярное</h2>
            {isLoading
                ? <h1>Идет загрузка...</h1>
                : <div>
                    {movies?.map(movie => (<AppMiniCard movie={movie} key={movie.id} genres={movie.genres}/>))}
                    <AppButton btnText="Посмотреть ещё"/>
                </div>
            }
        </div>
    );
};

export default AppMiniCardsList;
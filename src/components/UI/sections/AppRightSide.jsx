import React from 'react';
import AppMiniCardsList from "../cards/AppMiniCardsList";
import useMoviesLoader from "../../../hooks/useMoviesLoader";

const POPULAR_MOVIES_URL = '/api/v1/films/popular?limit=3'
const AppRightSide = () => {
    const {movies} = useMoviesLoader(POPULAR_MOVIES_URL);
    return (
        <div className="w-1/5 border-l-[#292A2F] border-l-[1px] bg-[#1C1D22] h-full p-12">
            <AppMiniCardsList movies={movies}/>
        </div>
    );
};

export default AppRightSide;
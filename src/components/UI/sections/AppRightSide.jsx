import React, {useEffect} from 'react';
import AppMiniCardsList from "../cards/AppMiniCardsList";
import useMoviesLoader from "../../../hooks/useMoviesLoader";

const POPULAR_MOVIES_URL = '/api/v1/films/popular?limit=3'
const AppRightSide = () => {
    const apiResponses = ['/api/v1/films/popular?limit=3']
    const movies = useMoviesLoader(apiResponses)
    return (
        <div className="w-[300px] border-l-[#292A2F] border-l-[1px] bg-[#1C1D22] h-full py-12 flex justify-center">
            <AppMiniCardsList movies={movies?.movies[0]}/>
        </div>
    );
};

export default AppRightSide;
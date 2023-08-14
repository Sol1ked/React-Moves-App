import React from 'react';
import useMoviesLoader from "../hooks/useMoviesLoader.js";
import {useLoading} from "../hooks/useLoading.js";
import AppSlider from "../components/UI/sliders/AppSlider.jsx";
import AppCardsList from "../components/UI/cards/AppCardsList.jsx";


const Home = () => {
    const NEW_MOVIES_URL = '/api/v1/films/new?limit=3';
    const {movies} = useMoviesLoader(NEW_MOVIES_URL);
    const {isLoading} = useLoading();
    return (
        <div className="w-full flex flex-col">
            <AppSlider movies={movies}/>
            <AppCardsList children="Вы смотрели"/>
        </div>
    )
};

export default Home;
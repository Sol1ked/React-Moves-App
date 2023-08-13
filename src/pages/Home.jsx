import React from 'react';
import Slider from "../components/UI/Slider.jsx";
import useMoviesLoader from "../hooks/useMoviesLoader.js";
import {useLoading} from "../hooks/useLoading.js";


const Home = () => {
    const NEW_MOVIES_URL = '/api/v1/films/new?limit=3';
    const {movies} = useMoviesLoader(NEW_MOVIES_URL);
    const {isLoading} = useLoading();
    console.log(isLoading)
    return (
        <div className="w-full flex flex-col">
            {isLoading ? (
                <p>Идет загрузка.22..</p>
            ) : (
                <Slider movies={movies}/>
            )}
        </div>
    )
};

export default Home;
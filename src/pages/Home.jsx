import React, {useEffect} from 'react';
import useMoviesLoader from "../hooks/useMoviesLoader.js";
import AppSlider from "../components/UI/sliders/AppSlider.jsx";
import AppCardsList from "../components/UI/cards/AppCardsList.jsx";


const Home = () => {
    const apiResponses = ['/api/v1/films/new?limit=3', '/api/v1/films/big-rating']
    const movies = useMoviesLoader(apiResponses)
    return (
        <div className="w-full flex flex-col">
            <AppSlider movies={movies?.movies?.[0]}/>
            {/*           <AppCardsList children="Вы смотрели" cards={movies?.movies?.[1]}/>*/}
            <AppCardsList children="Рекомендации для вас" cards={movies?.movies?.[1]}/>
        </div>
    )
};

export default Home;
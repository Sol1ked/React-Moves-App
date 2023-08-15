import React, {useState} from 'react';
import useMoviesLoader from "../hooks/useMoviesLoader.js";
import {useLoading} from "../hooks/useLoading.js";
import AppSlider from "../components/UI/sliders/AppSlider.jsx";
import AppCardsList from "../components/UI/cards/AppCardsList.jsx";
import AppCard from "../components/UI/cards/card/AppCard.jsx";


const Home = () => {
    const NEW_MOVIES_URL = '/api/v1/films/new?limit=3';
    const RAT_MOVIES_URL = '/api/v1/films/big-rating?limit=10';
    const {movies} = useMoviesLoader(NEW_MOVIES_URL);
    const {ratMovies} = useMoviesLoader(RAT_MOVIES_URL);
    const {isLoading} = useLoading();
    const [cards, setCards] = useState([
        {
            id: 1,
            title: 'Movie',
            text: 'text',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlnTa1_hvfsAbfb9EH7UlbrgkufjBlwEXIw&usqp=CAU'
        },
        {
            id: 2,
            title: 'Movie2',
            text: 'text2',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlnTa1_hvfsAbfb9EH7UlbrgkufjBlwEXIw&usqp=CAU'
        },
        {
            id: 3,
            title: 'Movie3',
            text: 'text3',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlnTa1_hvfsAbfb9EH7UlbrgkufjBlwEXIw&usqp=CAU'
        },
        {
            id: 4,
            title: 'Movie4',
            text: 'text4',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlnTa1_hvfsAbfb9EH7UlbrgkufjBlwEXIw&usqp=CAU'
        },
        {
            id: 5,
            title: 'Movie5',
            text: 'text4',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlnTa1_hvfsAbfb9EH7UlbrgkufjBlwEXIw&usqp=CAU'
        },
        {
            id: 6,
            title: 'Movie6',
            text: 'text4',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlnTa1_hvfsAbfb9EH7UlbrgkufjBlwEXIw&usqp=CAU'
        },
        {
            id: 7,
            title: 'Movie7',
            text: 'text4',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlnTa1_hvfsAbfb9EH7UlbrgkufjBlwEXIw&usqp=CAU'
        },
        {
            id: 8,
            title: 'Movie8',
            text: 'text4',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlnTa1_hvfsAbfb9EH7UlbrgkufjBlwEXIw&usqp=CAU'
        },
        {
            id: 9,
            title: 'Movie9',
            text: 'text4',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlnTa1_hvfsAbfb9EH7UlbrgkufjBlwEXIw&usqp=CAU'
        },
    ]);
    const [cards2, setCards2] = useState([
        {
            id: 1,
            title: 'Movie',
            text: 'text',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlnTa1_hvfsAbfb9EH7UlbrgkufjBlwEXIw&usqp=CAU'
        },
        {
            id: 2,
            title: 'Movie2',
            text: 'text2',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlnTa1_hvfsAbfb9EH7UlbrgkufjBlwEXIw&usqp=CAU'
        },
        {
            id: 3,
            title: 'Movie3',
            text: 'text3',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlnTa1_hvfsAbfb9EH7UlbrgkufjBlwEXIw&usqp=CAU'
        },
        {
            id: 4,
            title: 'Movie4',
            text: 'text4',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlnTa1_hvfsAbfb9EH7UlbrgkufjBlwEXIw&usqp=CAU'
        },
        {
            id: 5,
            title: 'Movie5',
            text: 'text4',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlnTa1_hvfsAbfb9EH7UlbrgkufjBlwEXIw&usqp=CAU'
        },
        {
            id: 6,
            title: 'Movie6',
            text: 'text4',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlnTa1_hvfsAbfb9EH7UlbrgkufjBlwEXIw&usqp=CAU'
        },
        {
            id: 7,
            title: 'Movie7',
            text: 'text4',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlnTa1_hvfsAbfb9EH7UlbrgkufjBlwEXIw&usqp=CAU'
        },
        {
            id: 8,
            title: 'Movie8',
            text: 'text4',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlnTa1_hvfsAbfb9EH7UlbrgkufjBlwEXIw&usqp=CAU'
        },
        {
            id: 9,
            title: 'Movie9',
            text: 'text4',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlnTa1_hvfsAbfb9EH7UlbrgkufjBlwEXIw&usqp=CAU'
        },
        {
            id: 10,
            title: 'Movie10',
            text: 'text4',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlnTa1_hvfsAbfb9EH7UlbrgkufjBlwEXIw&usqp=CAU'
        },
        {
            id: 11,
            title: 'Movie11',
            text: 'text4',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlnTa1_hvfsAbfb9EH7UlbrgkufjBlwEXIw&usqp=CAU'
        },
        {
            id: 12,
            title: 'Movie12',
            text: 'text4',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlnTa1_hvfsAbfb9EH7UlbrgkufjBlwEXIw&usqp=CAU'
        },
        {
            id: 13,
            title: 'Movie13',
            text: 'text4',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlnTa1_hvfsAbfb9EH7UlbrgkufjBlwEXIw&usqp=CAU'
        },
    ]);
    console.log(ratMovies)
    return (
        <div className="w-full flex flex-col">
            <AppSlider movies={movies}/>
            {/*<AppCardsList children="Вы смотрели" type="watched" cards={ratMovies}/>*/}
            <AppCardsList children="Рекомендации для вас" cards={cards2}/>
        </div>
    )
};

export default Home;
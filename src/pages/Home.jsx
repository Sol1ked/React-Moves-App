import React, {useState} from 'react';
import {useRequestManager} from "../hooks/useRequestManager.js";
import Slider from "../components/UI/Slider.jsx";

const Home = () => {
    const {isLoading, sendRequest} = useRequestManager()
    const [slides, setSlides] = useState([
        {
            id: 1,
            text: 'Slide1',
            imgSrc: 'https://img3.akspic.ru/crops/8/3/0/4/7/174038/174038-piksar-kinoteatr-pricep-kanun-poster_filma-1920x1080.jpg'
        },
        {
            id: 2,
            text: 'Slide2',
            imgSrc: 'https://img3.akspic.ru/crops/7/3/7/6/3/136737/136737-vymyslennyjpersonaz-volosynalice-sheya-kinoteatr-poster-1920x1080.jpg'
        },
        {
            id: 3,
            text: 'Slide3',
            imgSrc: 'https://img3.akspic.ru/crops/4/1/6/6/56614/56614-film-kino-kinoteatr-vymyslennyj_personaz-film_kritika-1920x1080.jpg'
        }
    ])
    return (
        <div className="w-full flex flex-col">
            <Slider slides={slides}/>
        </div>
    );
};

export default Home;
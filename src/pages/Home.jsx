import React, {useEffect} from 'react';
import AppSlider from "../components/UI/sliders/AppSlider.jsx";
import AppCardsList from "../components/UI/cards/AppCardsList.jsx";
import {useData} from "../context/DataContext";
import {useUserSession} from "../hooks/useUserSession.js";


const Home = () => {
    const {movies} = useData();
    const sliders = [
        {title: '', data: movies?.movies?.[0], component: AppSlider},
        {title: 'Вы смотрели', data: movies?.movies?.[1], component: AppCardsList, cardsType: 'watched'},
        {title: 'Рекомендации для вас', data: movies?.movies?.[2], component: AppCardsList},
    ];

    const {userInfo} = useUserSession()
    const user = userInfo()

    return (
        <div className="w-full flex flex-col">
            {sliders.map((slider, index) => {
                const SliderComponent = slider.component;
                return (
                    <SliderComponent
                        key={index}
                        children={slider?.title}
                        type={slider?.cardsType}
                        cards={slider?.data}
                    />
                );
            })}
        </div>
    );
};

export default Home;
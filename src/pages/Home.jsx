import React from 'react';
import AppSlider from "../components/UI/sliders/AppSlider.jsx";
import AppCardsList from "../components/UI/cards/AppCardsList.jsx";
// import {useLoading} from "../hooks/useLoading.js";


const Home = () => {
    // const {movies} = useData();
    // const sliders = [
    //     {title: '', data: movies?.movies?.[0], component: AppSlider},
    //     {title: 'Вы смотрели', data: movies?.movies?.[3], component: AppCardsList, cardsType: 'watched'},
    //     {title: 'Рекомендации для вас', data: movies?.movies?.[4], component: AppCardsList},
    //     {title: 'Большой рейтинг', data: movies?.movies?.[2], component: AppCardsList},
    //     {title: 'Популярное', data: movies?.movies?.[1], component: AppCardsList},
    // ].filter(slider => slider.data);

    return (
        <div className="flex flex-col">
            {/*{sliders.map((slider, index) => {*/}
            {/*    const SliderComponent = slider.component;*/}
            {/*    return (*/}
            {/*        <SliderComponent*/}
            {/*            key={index}*/}
            {/*            children={slider?.title}*/}
            {/*            type={slider?.cardsType}*/}
            {/*            cards={slider?.data}*/}
            {/*        />*/}
            {/*    );*/}
            {/*})}*/}
        </div>
    );
};

export default Home;
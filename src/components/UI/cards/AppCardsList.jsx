import React, {useState} from 'react';
import AppWatchedCard from "./card/AppWatchedCard.jsx";
import AppCarouselSlider from "../sliders/AppCarouselSlider";

const AppCardsList = ({children, ...props}) => {
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
    return (
        <div className="mt-12">
            <h2 className="text-[#E5E6EB] text-4xl font-bold">{children}</h2>
            <div className="flex flex-wrap mt-12 gap-x-4">
                <AppCarouselSlider slides={cards}/>
            </div>
        </div>
    );
};

export default AppCardsList;
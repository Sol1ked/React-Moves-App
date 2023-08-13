import React from 'react';
import AppMark from "../components/AppMark.jsx";

const AppMiniCard = ({...props}) => {
    return (
        <div className="flex gap-3 w-full">
            <img src={props.movie.poster} className="rounded bg-center bg-cover max-w-[56px]" alt="/"/>
            <div className="flex flex-col items-start">
                <p className="text-[#FFFFFF] text-base ">{props.movie.title}</p>
                <div className="mt-2 text-sm text-[#ABABAB] w-full flex">
                    {props.movie.genres.map((genre, index) => (
                        <p key={genre.id}>{index > 0 ? '/' : ''}{genre.name}</p>
                    ))}
                </div>
                <AppMark mark={props.movie.rating.value}/>
            </div>
        </div>
    )
        ;
};

export default AppMiniCard;
import React from 'react';
import AppMark from "../card/AppMark";

const AppMiniCard = ({...props}) => {
    return (
        <div className="flex gap-3 p-2 w-full cursor-pointer hover:bg-[#292A2F] duration-500">
            <img src={props.movie.poster} className="rounded bg-center bg-cover max-w-[48px]" alt="/"/>
            <div className="flex flex-col items-start">
                <p className="text-[#FFFFFF] text-base truncate">{props.movie.title}</p>
                <div className="mt-2 text-sm relative text-[#ABABAB] w-full flex">
                    {props.movie.genres.map((genre, index) => (
                        index < 2 && <p className="truncate" key={genre.id}>{index > 0 ? '/' : ''}{genre.name}</p>

                    ))}
                </div>
                <div className="mt-2">
                    <AppMark mark={props.movie.rating.value}/>
                </div>
            </div>
        </div>
    )
        ;
};

export default AppMiniCard;
import React, {useEffect, useRef, useState} from 'react';
import {FiSearch} from "react-icons/fi";
import useMoviesLoader from "../../../hooks/useMoviesLoader.js";
import AppInput from "../AppInput.jsx";
import AppMiniCard from "../cards/card/AppMiniCard.jsx";

const AppSearch = () => {
    const {movies} = useMoviesLoader(['/api/v1/films']);
    const [films, setFilms] = useState([]);
    const [active, setActive] = useState(false);
    const searchContainerRef = useRef(null);

    const searchMovies = (searchParam) => {
        if (searchParam) {
            searchParam.toLowerCase().split(' ');
            const filteredFilms = movies[0].filter(film => film.title.toLowerCase().includes(searchParam));
            setFilms(filteredFilms);
        } else {
            setFilms(movies[0]);
        }
    }

    useEffect(() => {
        setFilms(movies[0]);
    }, [movies]);


    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
                setActive(false);
            }
        });
        return () => {
            document.removeEventListener('click', (e) => {
                if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
                    setActive(false);
                }
            });
        };
    }, []);

    return (
        <div className="flex justify-center items-center w-full bg-[#1C1D22] border-b-[#292A2F] border-b-[1px] h-32">
            <div className="relative" ref={searchContainerRef}>
                <div
                    className={`${
                        active ? 'rounded-b-none' : 'rounded-2xl'
                    } flex items-center border-2 gap-2 border-[#60606C] rounded-2xl w-[350px] bg-[#1E1F24] px-5 py-2.5`}
                >
                    <FiSearch size={24} color="#60606C" cursor="pointer"/>
                    <AppInput
                        onClick={(e) => e.stopPropagation()}
                        onFocus={() => setActive(true)}
                        onChange={(e) => searchMovies(e.target.value)}
                        type="text"
                        placeholder="Поиск..."
                        className="bg-[#1C1D22] placeholder-[#60606C] outline-none text-[#fff]"
                    />
                </div>
                <div
                    className={`${active ? 'block' : 'hidden'}
                        absolute top-11 py-2 pt-0 border-2
                        border-[#60606C] rounded-t-none 
                        rounded-2xl border-t-0 z-10
                        w-full duration-500 bg-[#1E1F24] justify-center items-center`}
                >
                    {films?.length > 0 ?
                        <div
                            className="flex flex-col text-base"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <p className="px-2 text-sm">Фильмы</p>
                            {films.map((film, index) => (index < 5 &&
                                <AppMiniCard
                                    movie={film}
                                    key={film.id}
                                    genres={film.genres}
                                />
                            ))}
                        </div>
                        : <p className="text-center">По вашему запросу ничего не найдено</p>
                    }
                </div>
            </div>
        </div>
    );
};


export default AppSearch;
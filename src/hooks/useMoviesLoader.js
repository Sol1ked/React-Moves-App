import {useEffect, useState} from "react";
import {useRequestManager} from "../hooks/useRequestManager";
import {useAuth} from "../hooks/useAuth.js";

const useMoviesLoader = (apiResponses) => {
    const {user} = useAuth();
    const isAuth = user !== null;
    const [res, setRes] = useState(apiResponses)
    const [movies, setMovies] = useState([]);
    const {sendResponse} = useRequestManager();
    useEffect(() => {
        console.log(res)
    }, [apiResponses])
    const fetchMovies = async (responses) => {
        const movieResponses = await Promise.all(responses.map(response => sendResponse(response, 'get')));
        const moviesData = movieResponses.map(response => response?.data);
        setMovies(moviesData);
    };

    useEffect(() => {
        fetchMovies(res)
    }, [res])

    return {movies};
};

export default useMoviesLoader;
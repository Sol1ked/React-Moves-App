import {useEffect, useState} from "react";
import {useRequestManager} from "../hooks/useRequestManager.js";

const useMoviesLoader = (apiResponses) => {
        const [movies, setMovies] = useState([]);
        const {sendResponse} = useRequestManager();

        const getPosts = async () => {
            const movieResponses = await Promise.all(apiResponses.map(apiResponse => sendResponse(apiResponse, 'get')));
            const moviesData = movieResponses.map((response) => response.data);
            setMovies(moviesData)
        }

        useEffect(() => {
            getPosts()
        }, [])

        return {movies}
    }
;

export default useMoviesLoader;
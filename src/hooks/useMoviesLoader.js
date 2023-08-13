import {useEffect, useState} from "react";
import {useRequestManager} from "../hooks/useRequestManager.js";

const useMoviesLoader = (apiResponse) => {
    const {sendResponse} = useRequestManager();
    const [movies, setMovies] = useState([]);

    const getPosts = async () => {
        const response = await sendResponse(apiResponse, 'get');
        if (response) {
            setMovies(response.data);
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return {movies}
}

export default useMoviesLoader;
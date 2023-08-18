import {createContext, useContext} from "react";
import useMoviesLoader from "../hooks/useMoviesLoader.js";


const DataContext = createContext();

export const DataProvider = ({children}) => {
    const apiResponses = ['/api/v1/films/new?limit=3', '/api/v1/films/subscriptions-watched', '/api/v1/films/big-rating'];
    const movies = useMoviesLoader(apiResponses);

    return (
        <DataContext.Provider value={{movies}}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    return useContext(DataContext);
};
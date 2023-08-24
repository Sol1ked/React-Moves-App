import {createContext, useContext, useEffect, useState} from "react";
import useMoviesLoader from "../hooks/useMoviesLoader.js";
import {useAuth} from "../hooks/useAuth.js";

const DataContext = createContext();
export const DataProvider = ({children}) => {
    const apiResponsesPublicDefault = ['/api/v1/films/new?limit=3', '/api/v1/films/popular', '/api/v1/films/big-rating'];
    const apiResponsesPrivate = ['/api/v1/films/subscriptions-watched', '/api/v1/films/recommendations'];
    const {user} = useAuth();
    const isAuth = user !== null;
    const allApiResponses = isAuth ? [...apiResponsesPublicDefault, ...apiResponsesPrivate] : apiResponsesPublicDefault;
    console.log(allApiResponses)
    const movies = useMoviesLoader(allApiResponses);

    return (
        <DataContext.Provider value={{movies}}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    return useContext(DataContext);
};
// import {createContext, useContext, useEffect, useMemo, useState} from "react";
// import useMoviesLoader from "../hooks/useMoviesLoader.js";
// // import {useUserSession} from "../hooks/useUserSession.js";
// import {useAuth} from "../hooks/useAuth.js";
//
// const DataContext = createContext();
// export const DataProvider = ({children}) => {
//     const apiResponsesPublic = ['/api/v1/films/new?limit=3', '/api/v1/films/popular', '/api/v1/films/big-rating'];
//     const apiResponsesPrivate = ['/api/v1/films/subscriptions-watched', '/api/v1/films/recommendations'];
//     // const {getInfo} = useAuth();
//     // const user = getInfo();
//     // const isAuth = user !== null;
//     // if (isAuth) {
//     //     apiResponsesPublic.push(...apiResponsesPrivate);
//     // }
//     const movies = useMoviesLoader(apiResponsesPublic);
//
//     return (
//         <DataContext.Provider value={{movies}}>
//             {children}
//         </DataContext.Provider>
//     );
// };
// export const useData = () => {
//     return useContext(DataContext);
// };
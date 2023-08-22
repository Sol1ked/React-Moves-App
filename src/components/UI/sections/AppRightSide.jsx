// import React, {useEffect, useState} from 'react';
// import AppMiniCardsList from "../cards/AppMiniCardsList";
// import {useRequestManager} from "../../../hooks/useRequestManager.js";
//
// const POPULAR_MOVIES_URL = '/api/v1/films/popular?limit=3'
// const AppRightSide = () => {
//     const {sendResponse} = useRequestManager();
//     const [movies, setMovies] = useState([])
//     const getMov = async () => {
//         const response = await sendResponse(POPULAR_MOVIES_URL, 'get')
//         setMovies(response)
//     }
//
//     useEffect(() => {
//         getMov()
//     }, [])
//
//     return (
//         <div
//             className="w-[300px] min-h-screen border-l-[#292A2F] border-l-[1px] bg-[#1C1D22] py-12 flex justify-center">
//             <AppMiniCardsList movies={movies}/>
//         </div>
//     );
// };
//
// export default AppRightSide;
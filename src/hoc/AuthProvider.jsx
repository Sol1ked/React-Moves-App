import {createContext, useEffect, useState} from "react";
import useAuth from "../hooks/useAuth.js";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const {auth, setAuth} = useAuth()
    // const [auth, setAuth] = useState(() => {
    //     const storedAuth = JSON.parse(localStorage.getItem("auth"));
    //     return storedAuth || {};
    // });

    // useEffect(() => {
    //     localStorage.setItem("auth", JSON.stringify(auth));
    // }, [auth]);

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    );
};
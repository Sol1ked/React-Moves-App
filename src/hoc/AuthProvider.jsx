import {createContext} from "react";
import {useUserSession} from "../hooks/useUserSession.js";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const {userAuth, userLogout} = useUserSession()
    const signIn = (newUser, cb) => {
        userAuth(newUser)
        cb()
    }
    const signOut = (cb) => {
        userLogout()
        cb()
    }

    const value = {signIn, signOut}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
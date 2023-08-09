import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const signIn = (newUser, cb) => {
        setUser(newUser)
        cb()
    }

    const signOut = (cb) => {
        setUser(null)
        cb()
    }

    const value = {user, signIn, signOut}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
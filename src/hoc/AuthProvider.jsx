import {createContext} from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const signIn = (newUser, cb) => {
        localStorage.setItem('user', JSON.stringify(newUser))
        cb()
    }
    const signOut = (cb) => {
        localStorage.removeItem('user')
        cb()
    }

    const value = {signIn, signOut}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
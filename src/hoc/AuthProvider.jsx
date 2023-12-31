import {createContext, useEffect, useState} from "react";
import {useRequestManager} from "../hooks/useRequestManager.js";
import {
    getUserToLocalStorage,
    setUserToLocalStorage,
    removeUserToLocalStorage,
} from "../utils/localStorageUtils.js";

export const AuthContext = createContext({});
export const AuthProvider = ({children}) => {
    const savedUser = getUserToLocalStorage();
    const [user, setUser] = useState(savedUser ? savedUser : null);
    const {sendResponse} = useRequestManager();
    const getUserInfoData = async () => {
        const response = await sendResponse("/api/v1/profile", "get");
        if (response.data) {
            setUserToLocalStorage(response.data);
            setUser(response.data);
        } else {
            await signOut();
        }
    };

    const signIn = async (data) => {
        const response = await sendResponse("/login", "post", data);
        setUser(response.data);
        await getUserInfoData();
    };
    const signUp = async (data) => {
        const response = await sendResponse("/register", "post", data);
        setUser(response.data);
        await getUserInfoData();
    };

    const signOut = async () => {
        await sendResponse("/logout", "delete");
        setUser(null);
        removeUserToLocalStorage();
    };

    const contextValue = {
        user,
        signIn,
        signUp,
        getUserInfoData,
        signOut,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};
import {createContext, useState} from "react";
import {userInfo, userLogin, userLogout, userRegister} from "../api/user.js";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const signIn = async (data) => {
        const userData = await userLogin(data);
        console.log(userData)
        setUser(userData);
    };

    const signUp = async (data) => {
        const newUser = await userRegister(data);
        setUser(newUser);
    };

    const getUserInfoData = async () => {
        await userInfo();
        setUser(null);
    };

    const signOut = async () => {
        await userLogout();
        setUser(null);
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

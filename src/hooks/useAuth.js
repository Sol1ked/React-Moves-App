import {useContext, useEffect} from "react";
import {AuthContext} from "../hoc/AuthProvider";

const useAuth = () => {
    const authContext = useContext(AuthContext);
    return authContext

    // if (!authContext) {
    //     throw new Error("useAuth должен использоваться внутри AuthProvider");
    // }
    //
    // const { auth, setAuth } = authContext;
    //
    // return { auth, setAuth };
};

export default useAuth;
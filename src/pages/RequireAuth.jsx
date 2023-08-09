import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useAuth} from "../hooks/useAuth.js";


const RequireAuth = ({children}) => {
    const location = useLocation()
    const {user} = useAuth();
    if (!user) {
        return <Navigate to='/login' state={{from: location}}/>
    }

    return children;
}

export default RequireAuth;
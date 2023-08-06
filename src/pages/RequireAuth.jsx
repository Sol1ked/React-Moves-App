import {Navigate, Outlet, useLocation} from "react-router-dom";
import useAuth from "../hooks/useAuth.js";

const RequireAuth = ({allowedRoles}) => {
    const {auth} = useAuth();
    const location = useLocation()
    console.log(allowedRoles)
    console.log(auth)
    return (
        allowedRoles.find(role => auth?.role?.includes(role))
            ? <Outlet/>
            : auth?.user
                ? <Navigate to="/missing" state={{from: location}} replace/>
                : <Navigate to="/login" state={{from: location}} replace/>

    )
}

export default RequireAuth;
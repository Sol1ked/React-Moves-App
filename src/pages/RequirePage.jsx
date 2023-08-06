import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import useAuth from "../hooks/useAuth.js";

const RequirePage = () => {
    const {auth} = useAuth();

    return (
        <div>
            <h1>Личный профиль</h1>
            <Link to="/">На главную</Link>
        </div>
    );
};

export default RequirePage;
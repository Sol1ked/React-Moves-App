import React from 'react';
import {Link} from 'react-router-dom';

const RequirePage = () => {
    return (
        <div className="flex justify-between w-full gap-4 flex-wrap">
            <div className="flex-1 bg-red-900 p-4">
                <h1>Личный профиль</h1>
                <Link to="/">На главную</Link>
            </div>
            <div className="flex-1 bg-red-900 p-4">
                <h1>Личный профиль</h1>
                <Link to="/">На главную</Link>
            </div>
            <div className="flex-1 bg-red-900 p-4">
                <h1>Личный профиль</h1>
                <Link to="/">На главную</Link>
            </div>
            <div className="flex-1 bg-red-900 p-4">
                <h1>Личный профиль</h1>
                <Link to="/">На главную</Link>
            </div>
            <div className="flex-1 bg-red-900 p-4">
                <h1>Личный профиль</h1>
                <Link to="/">На главную</Link>
            </div>
        </div>
    );
};

export default RequirePage;

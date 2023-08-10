import React from 'react';
import {Link} from 'react-router-dom';

const RequirePage = () => {
    return (
        <div className="flex w-full justify-between gap-4 flex-wrap">
            <div className="w-[200px] h-[300px] bg-red-900 p-4">
                <h1>Личный профиль</h1>
                <Link to="/">На главную 1</Link>
            </div>
            <div className="w-[200px] h-[300px] bg-red-900 p-4">
                <h1>Личный профиль</h1>
                <Link to="/">На главную</Link>
            </div>
            <div className="w-[200px] h-[300px] bg-red-900 p-4">
                <h1>Личный профиль</h1>
                <Link to="/">На главную</Link>
            </div>
            <div className="w-[200px] h-[300px] bg-red-900 p-4">
                <h1>Личный профиль</h1>
                <Link to="/">На главную</Link>
            </div>
            <div className="w-[200px] h-[300px] bg-red-900 p-4">
                <h1>Личный профиль</h1>
                <Link to="/">На главную</Link>
            </div>
        </div>

    );
};

export default RequirePage;

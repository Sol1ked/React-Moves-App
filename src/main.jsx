import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./App";
import {AuthProvider} from "./hoc/AuthProvider.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path="/*" element={<App/>}></Route>
            </Routes>
        </AuthProvider>
    </BrowserRouter>
)

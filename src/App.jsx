import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import {RequireAuth} from "./hoc/RequireAuth.jsx";
import React from "react";
import {AuthProvider} from "./hoc/AuthProvider.jsx";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={
                    <RequireAuth>
                        <App/>
                    </RequireAuth>
                }/>
            </Routes>
        </AuthProvider>
    )
}

export default App

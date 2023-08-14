import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import RequirePage from "./pages/RequirePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import RequireAuth from "./pages/RequireAuth.jsx";
import Register from "./pages/Register.jsx";
import {AuthProvider} from "./hoc/AuthProvider.jsx";
import {LoadingProvider} from "./hoc/LoadingProvider.jsx";
import Layout from "./components/UI/sections/Layout.jsx";

function App() {
    return (
        <LoadingProvider>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="*" element={<NotFoundPage/>}></Route>
                        <Route path="personal" element={
                            <RequireAuth>
                                <RequirePage/>
                            </RequireAuth>
                        }/>
                    </Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                </Routes>
            </AuthProvider>
        </LoadingProvider>
    )
}

export default App

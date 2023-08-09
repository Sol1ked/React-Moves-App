import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import RequirePage from "./pages/RequirePage.jsx";
import Missing from "./pages/Missing.jsx";
import RequireAuth from "./pages/RequireAuth.jsx";
import Unauth from "./pages/Unauth.jsx";
import Register from "./pages/Register.jsx";
import {AuthProvider} from "./hoc/AuthProvider.jsx";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="home" element={<Home/>}/>
                    <Route path="missing" element={<Unauth/>}/>
                    <Route path="*" element={<Missing/>}></Route>
                    <Route path="/personal" element={
                        <RequireAuth>
                            <RequirePage/>
                        </RequireAuth>
                    }/>
                </Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
        </AuthProvider>
    )
}

export default App

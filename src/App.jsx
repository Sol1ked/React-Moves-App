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

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="home" element={<Home/>}/>
                <Route path="missing" element={<Unauth/>}/>
            </Route>
            <Route element={<RequireAuth allowedRoles={['viewer']}/>}>
                <Route path="/personal" element={<RequirePage/>}/>
            </Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="*" element={<Missing/>}></Route>
        </Routes>
    )
}

export default App

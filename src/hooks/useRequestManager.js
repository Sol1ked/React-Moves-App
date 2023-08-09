import {useState} from "react";
import axios from "../api/axios-settings";
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth.js";

const COOKIE_URL = '/sanctum/csrf-cookie';

export const useRequestManager = () => {
    const {signIn} = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || '/';

    const [isLoading, setIsLoading] = useState(false);
    const [modal, setModal] = useState({isOpen: false, type: "", message: ""});

    const getCSRFCookie = async () => {
        try {
            await axios.get(COOKIE_URL);
        } catch (error) {
            console.log(error);
        }
    };

    const handleResponse = async (response) => {
        if (response) {
            const user = response?.data

            signIn(user, () => navigate(fromPage, {replace: true}))
            localStorage.setItem('user', JSON.stringify(user))

            return {
                type: "success",
                message: 'Успешно!'
            };
        } else {
            return {
                type: "error",
                message: response.data.message || "Произошла ошибка"
            };
        }
    };

    const sendRequest = async (url, method, data) => {
        try {
            setIsLoading(true);
            await getCSRFCookie();
            const response = await axios[method](url, data);
            const modalContent = await handleResponse(response);
            openModal(modalContent);
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Произошла ошибка";
            const modalContent = {
                type: "error",
                message: errorMessage,
            };
            openModal(modalContent);
        } finally {
            setIsLoading(false);
        }
    };

    const openModal = (modalContent) => {
        const newModal = {
            isOpen: true,
            ...modalContent,
        };
        setModal(newModal);
    };

    const closeModal = () => {
        setModal({isOpen: false, type: "", message: ""});
    };

    return {isLoading, modal, sendRequest, closeModal};
};
import {useState} from "react";
import axios from "../api/axios-settings";

const COOKIE_URL = '/sanctum/csrf-cookie';

export const useRequestManager = () => {

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
            return {
                type: "success", message: 'Успешно!'
            };
        } else {
            return {
                type: "error", message: response.data.message || "Произошла ошибка"
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
            return response;
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Произошла ошибка";
            const modalContent = {
                type: "error", message: errorMessage,
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
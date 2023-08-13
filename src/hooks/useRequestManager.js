import axios from "../api/axios-settings";
import {useState} from "react";
import {useLoading} from "../hooks/useLoading.js";

const COOKIE_URL = '/sanctum/csrf-cookie';


export const useRequestManager = () => {
    const {showLoading, hideLoading} = useLoading();
    const [notification, setNotification] = useState({
        isOpen: false,
        type: '',
        message: ''
    })
    const getCookie = async () => {
        try {
            await axios.get(COOKIE_URL)
        } catch (e) {
            console.log(e.message)
        }
    }

    const addNotificationMessage = async (response) => {
        if (response) {
            return {
                type: "success", message: 'Успешно!'
            };
        } else {
            return {
                type: "error", message: response.data.message || "Произошла ошибка"
            };
        }
    }

    const openNotification = (content) => {
        const newNotification = {
            isOpen: true,
            ...content
        }
        setNotification(newNotification)
    }

    const closeNotification = () => {
        setNotification({isOpen: false, type: "", message: ""})
    }
    const sendResponse = async (url, method, data) => {
        try {
            showLoading();
            await getCookie();
            const response = await axios[method](url, data);
            const modalContent = await addNotificationMessage(response);
            openNotification(modalContent);
            return response;
        } catch (e) {
            const errorMessage = e.response?.data?.message || "Произошла ошибка";
            const notificationContent = {
                type: "error", message: errorMessage,
            };
            openNotification(notificationContent)
        } finally {
            hideLoading();
        }
    }


    return {sendResponse, notification, closeNotification}

}

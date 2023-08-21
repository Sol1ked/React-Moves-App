import axios from "../api/axios-settings";
import {useState} from "react";
import {useLoading} from "../hooks/useLoading.js";

const COOKIE_URL = '/sanctum/csrf-cookie';


export const useRequestManager = () => {
    const {
        showLoading,
        hideLoading,
        showNotification,
    } = useLoading();
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
    const sendResponse = async (url, method, data) => {
        try {
            showLoading();
            await getCookie();
            const response = await axios[method](url, data);
            if (method !== 'get') {
                const modalContent = await addNotificationMessage(response);
                showNotification(modalContent);
            }
            console.log(response.data)
            return response.data;
        } catch (e) {
            const errorMessage = e.response?.data?.message || "Произошла ошибка";
            const notificationContent = {
                type: "error", message: errorMessage,
            };
            showNotification(notificationContent)
        } finally {
            hideLoading();
        }
    }


    return {sendResponse}

}
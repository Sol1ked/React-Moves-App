import React, {useContext} from 'react';
import axios from "../api/axios-settings";
import {LoadingContext} from "../hoc/LoadingProvider.jsx";

const COOKIE_URL = '/sanctum/csrf-cookie';
export const useRequestManager = () => {
    const {showLoading, hideLoading, showNotification, isLoading} = useContext(LoadingContext);
    const getCookies = () => {
        return axios.get(COOKIE_URL);
    };

    const addNotificationMessage = async (response) => {
        const messageType = response ? "success" : "error";
        const message = response ? 'Успешно!' : (response.data.message || "Произошла ошибка");

        return {type: messageType, message};
    }

    const sendResponse = async (url, method, data) => {
        await getCookies();
        showLoading();
        return axios({method, url, data,})
            .then(response => {
                if (method !== 'get') {
                    return addNotificationMessage(response)
                        .then(modalContent => {
                            showNotification(modalContent);
                            return response;
                        });
                } else {
                    return response;
                }
            })
            .catch(error => {
                const errorMessage = error.response?.data?.message || "Произошла ошибка";
                const notificationContent = {
                    type: "error",
                    message: errorMessage,
                };
                showNotification(notificationContent);
                throw error;
            })
            .finally(() => {
                hideLoading();
            });
    };

    return {sendResponse};
};
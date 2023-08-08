import axios from "./axios-settings";

const COOKIE_URL = '/sanctum/csrf-cookie';

export const getCSRFCookie = async () => {
    try {
        await axios.get(COOKIE_URL);
    } catch (error) {
        console.log()
    }
};

const handleResponse = async (response) => {
    if (response) {
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

export const sendRequest = async (url, method, data) => {
    try {
        await getCSRFCookie()
        const response = await axios[method](url, data);
        return await handleResponse(response);
    } catch (error) {
        return {
            type: "error",
            message: error.response?.data?.message || "Произошла ошибка"
        };
    } finally {
        console.log('uhu')
    }
};
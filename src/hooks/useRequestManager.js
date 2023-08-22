import axios from "../api/axios-settings";

const COOKIE_URL = '/sanctum/csrf-cookie';
export const useRequestManager = () => {
    const getCookies = () => {
        return axios.get(COOKIE_URL);
    };

    const sendResponse = (url, method, data) => {
        return getCookies().then(() => {
            return axios[method](url, data);
        }).then(response => {
            return response;
        }).catch(error => {
            console.log(error);
            throw error;
        });
    };

    return {sendResponse};
};
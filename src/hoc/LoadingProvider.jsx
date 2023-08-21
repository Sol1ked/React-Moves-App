import React, {createContext, useContext, useState} from 'react';

export const LoadingContext = createContext(null);

export const LoadingProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [notification, setNotification] = useState({
        isOpen: false, type: '', message: ''
    });
    const showNotification = (response) => {
        setNotification({isOpen: true, message: response.message, type: response.type})
    }
    const hideNotification = () => {
        setNotification({isOpen: false, message: '', type: ''})
    }
    const showLoading = () => {
        setIsLoading(true);
    };

    const hideLoading = () => {
        setIsLoading(false);
    };

    return (
        <LoadingContext.Provider
            value={{
                isLoading,
                showLoading,
                hideLoading,
                showNotification,
                hideNotification,
                notification
            }}>
            {children}
        </LoadingContext.Provider>
    );
};
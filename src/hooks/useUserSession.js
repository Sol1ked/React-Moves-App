export const useUserSession = () => {
    const userAuth = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
    };
    const userLogout = () => {
        localStorage.removeItem('user');
    };
    const userInfo = () => {
        return JSON.parse(localStorage.getItem('user'));
    };

    return {userAuth, userLogout, userInfo};
};
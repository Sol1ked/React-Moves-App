export const setUserToLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user))
}
export const getUserToLocalStorage = () => {
    const user = localStorage.getItem("user")
    return user ? JSON.parse(user) : null
}
export const removeUserToLocalStorage = () => {
    localStorage.removeItem("user")
}
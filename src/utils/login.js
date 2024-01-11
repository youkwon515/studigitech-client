export const pullLogin = () => {
    return localStorage.getItem("user");
}

export const pushLogin = (value) => {
    localStorage.setItem("user", value);
}

export const Logout = (value) => {
    localStorage.removeItem("user");
}
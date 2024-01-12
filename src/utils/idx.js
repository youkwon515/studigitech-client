export const pullIdx = () => {
    return localStorage.getItem("idx");
}

export const pushIdx = (value) => {
    localStorage.setItem("idx", value);
}

export const clearIdx = () => {
    //localStorage.setItem("idx", null);
    localStorage.removeItem("idx");
}
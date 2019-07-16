import axios from "./index";

export const register = (data) => (
    axios.request({
        url: "/user/register",
        method: "post",
        data
    })
);

export const login = (data) => (
    axios.request({
        url: "/user/login",
        method: "post",
        data
    })
);

export const logout = () => {
    axios.request({
        url: "/user/logout",
        method: "post"
    })
}
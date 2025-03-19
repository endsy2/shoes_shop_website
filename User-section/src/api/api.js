import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:3000/user",
    headers: {
        "Content-Type": "application/json",
    },

});
api.interceptors.response.use(
    (response) => response.data,
    (error) => {
        console.error("Api Error", error);
        return Promise.reject(error)
    }
);
export default api;
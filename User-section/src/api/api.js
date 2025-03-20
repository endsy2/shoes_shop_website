import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/user",  // Adjust this to the correct URL if necessary
    headers: {
        "Content-Type": "application/json",  // You can add authorization or other headers here if needed
    },
});

api.interceptors.response.use(
    (response) => response.data,  // Return response data directly
    (error) => {
        // Enhanced error handling
        console.error("API Error:", error.response ? error.response.data : error.message);
        return Promise.reject(error);  // Reject with the error to handle it in the calling code
    }
);

export default api;

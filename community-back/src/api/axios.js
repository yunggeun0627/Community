import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:8080",
    timeout: 10000,
});

export default api;
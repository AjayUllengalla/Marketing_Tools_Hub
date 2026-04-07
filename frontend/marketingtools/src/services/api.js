import axios from "axios";

const BASE_URL = "https://marketing-tools-hub-3.onrender.com/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
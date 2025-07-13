import axios from "axios";

// Use NODE_ENV to detect development vs production
const BASE_URL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_URL || "http://localhost:5001/api"
    : "/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
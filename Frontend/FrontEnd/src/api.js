import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // Your Spring Boot base URL
});

export default api;

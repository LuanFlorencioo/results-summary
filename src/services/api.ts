import axios from "axios";

const api = axios.create({
  baseURL: location.href,
  timeout: 10000
})

export default api;

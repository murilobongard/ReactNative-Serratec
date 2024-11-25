import axios from "axios";

const api = axios.create({
  baseURL: "https://673fb001a9bc276ec4b95164.mockapi.io/Api",
});
export default api;
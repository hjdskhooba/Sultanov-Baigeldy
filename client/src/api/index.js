import axios from "axios";

export const $mainApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

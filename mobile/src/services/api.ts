import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.100.9:3333",
  // check on Metro Bundler Expo on Browser
});

export default api;

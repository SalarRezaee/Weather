import axios from "axios";
const instance = axios.create({
  baseURL:
    "https://meta-weather.vercel.app/api/",
});
export default instance;


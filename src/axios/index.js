import axios from "axios";
const instance = axios.create({
  baseURL:
    "https://www.metaweather.com/api/",
});
export default instance;


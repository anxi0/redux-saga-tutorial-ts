import axios from "axios";
import { CONFIG_API_URL } from "../config";

const getConfig = () => {
  return axios.get(CONFIG_API_URL);
};

const api = {
  getConfig,
};
export default api;

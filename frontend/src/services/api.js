import axios from "axios";
import TokenService from "./token.service";
const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
instance.interceptors.request.use((config)=>{
  const token = TokenService.getLocalAccessToken();
  if (token){
    config.headers["X-Access-Token"] = token;
  }
  return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default instance;
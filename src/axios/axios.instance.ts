import axios from "axios";
import { useLocale } from "next-intl";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance };

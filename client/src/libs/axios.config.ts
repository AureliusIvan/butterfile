import Axios from "axios";
const axiosInstance = Axios.create({});

axiosInstance.defaults.baseURL = import.meta.env.VITE_BACKEND_URL as string;
axiosInstance.defaults.headers.common["Content-Type"] = "multipart/form-data";

export default axiosInstance;
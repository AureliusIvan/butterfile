// // axios config
// import axios from 'axios';
//
// const axiosInstance = axios.create({
//     baseURL: import.meta.env.VITE_BACKEND_URL as string,
//     headers: {
//         'Content-Type': 'application/json',
//         // cors
//         'Access-Control-Allow-Origin': '*',
//     },
// });
//
//
// // if post request, add token to header and change header content type
//
// axiosInstance.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });
// export default axiosInstance;

import Axios from "axios";
const axiosInstance = Axios.create({});

axiosInstance.defaults.baseURL = import.meta.env.VITE_BACKEND_URL as string;
axiosInstance.defaults.headers.common["Content-Type"] = "application/json"

export default axiosInstance;
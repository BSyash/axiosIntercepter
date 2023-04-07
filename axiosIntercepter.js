import axios from "axios";
import { BASE_URL } from "./utility";

// const token = JSON.parse(localStorage.getItem("token"));
// const status = JSON.parse(localStorage.getItem("status"));

// export const client = () => {
//   const token = localStorage.getItem("token");
//   const status = JSON.parse(localStorage.getItem("status"));
//   const defaultOptions = {
//     headers: {
//       Authorization: token ? `Basic ${token}` : "",
//       "Content-Type": "application/json",
//     },
//   };

//   //   const MAIN_URL = location.pathname === "/" ? AUTH_BASE_URL : BASE_URL;

//   return {
//     get: async (url, options = {}) =>
//       await axios.get(`${BASE_URL}${url}`, { ...defaultOptions, ...options }),
//     post: async (url, data, options = {}) =>
//       await axios.post(`${BASE_URL}${url}`, data, {
//         ...defaultOptions,
//         ...options,
//       }),
//     put: async (url, data, options = {}) =>
//       await axios.put(`${BASE_URL}${url}`, data, {
//         ...defaultOptions,
//         ...options,
//       }),
//     delete: async (url, options = {}) =>
//       await axios.delete(`${BASE_URL}${url}`, {
//         ...defaultOptions,
//         ...options,
//       }),
//   };
// };

// export const axiosRequester = client();

class Api {
  getDefaultOp = () => {
    const token = localStorage.getItem("token");
    const defaultOptions = {
      headers: {
        Authorization: token ? `Basic ${token}` : "",
        "Content-Type": "application/json",
      },
    };
    return defaultOptions;
  };
  get = async (url, options = {}) => {
    return await axios.get(`${BASE_URL}${url}`, {
      ...this.getDefaultOp(),
      ...options,
    });
  };
  post = async (url, data, options = {}) =>
    await axios.post(`${BASE_URL}${url}`, data, {
      ...this.getDefaultOp(),
      ...options,
    });
  put = async (url, data, options = {}) =>
    await axios.put(`${BASE_URL}${url}`, data, {
      ...this.getDefaultOp(),
      ...options,
    });
  delete = async (url, options = {}) =>
    await axios.delete(`${BASE_URL}${url}`, {
      ...this.getDefaultOp(),
      ...options,
    });
}
export const axiosRequester = new Api();

// how to call
// await axiosRequester.get(`/`);

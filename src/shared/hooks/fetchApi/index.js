import axios from "axios";

//internal imports
import { api } from "env";

export default function fetchApi() {
  let accessToken;
  let refreshToken;
  //   const accessToken = Storage("accessToken");
  //   const refreshToken = Storage("refreshToken");

  const instance = axios.create({
    baseURL: api,
    withCredentials: false,
  });

  // setting common default headers
  instance.defaults.headers.common["Content-Type"] = "application/json";
  instance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  instance.defaults.headers.common["Access-Control-Allow-Methods"] =
    "PUT, POST, PATCH, DELETE, GET";
  instance.defaults.headers.common["Access-Control-Allow-Credentials"] = "true";

  // setting request of axios interceptors
  instance.interceptors.request.use(
    (config) => {
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // setting response of axios interceptors
  //   instance.interceptors.response.use(
  //     (res) => {
  //       return res;
  //     },
  //     async (err) => {
  //       const originalConfig = err.config;

  //       if (err.response.status === 401 && !originalConfig._retry) {
  //         originalConfig._retry = true;

  //         try {
  //           const { data: fetchToken } = await instance
  //             .post("/auth", {
  //               refreshToken,
  //             })
  //             .catch((err) => {
  //               // if refresh token expired calling this funciton and uer needs to login
  //               if (
  //                 err?.response?.status === 500 &&
  //                 err?.response?.data?.message === "Invalid refresh token"
  //               ) {
  //                 // toast.error("Token expired!");
  //                 // localStorage.removeItem("accessToken");
  //                 // localStorage.removeItem("refreshToken");
  //                 // window.location.replace("/login");
  //               }
  //               return Promise.reject(fetchApi);
  //             });
  //           if (fetchToken) {
  //             // condition will be added here for setting new accesstoken
  //             // localStorage.setItem("accessToken", fetchToken?.accessToken);
  //             // localStorage.setItem("refreshToken", fetchToken?.refreshToken);
  //           }
  //           return instance(originalConfig);
  //         } catch (_error) {
  //           return Promise.reject(_error);
  //         }
  //       }

  //       return Promise.reject(err);
  //     }
  //   );
  return instance;
}

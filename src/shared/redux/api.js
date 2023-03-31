import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "env";

export const heiloApi = createApi({
  reducerPath: "heiloApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL + "api/v1",
    prepareHeaders: async (headers, { getState, endpoint }) => {
      const token = getState()?.auth?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});

export default heiloApi;

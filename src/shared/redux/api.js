import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { PRODUCTION_API_URL, DEVELOPMENT_API_URL, NODE_ENV } from "env";

const API_URL =
  NODE_ENV === "production" ? PRODUCTION_API_URL : DEVELOPMENT_API_URL;

export const heiloApi = createApi({
  reducerPath: "heiloApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    credentials: "include",
    prepareHeaders: async (headers, { getState, endpoint }) => {
      const token = getState()?.auth?.token;
      console.log("tokeen........", token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
    postProcessResponse: async (
      result,
      { dispatch, getState, requestId }
    ) => {},
  }),
  endpoints: (builder) => ({}),
});

export default heiloApi;

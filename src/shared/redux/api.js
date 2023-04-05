import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { PRODUCTION_API_URL, DEVELOPMENT_API_URL, NODE_ENV } from "env";

const API_URL =
  NODE_ENV === "production" ? PRODUCTION_API_URL : DEVELOPMENT_API_URL;

console.log(".........................checking for api", API_URL);

export const heiloApi = createApi({
  reducerPath: "heiloApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL + "api/v1",
    credentials: "include",
    prepareHeaders: async (headers, { getState, endpoint }) => {},
    postProcessResponse: async (
      result,
      { dispatch, getState, requestId }
    ) => {},
  }),
  endpoints: (builder) => ({}),
});

export default heiloApi;

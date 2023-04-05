import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_URL } from "env";

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

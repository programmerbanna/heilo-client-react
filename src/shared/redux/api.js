import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const heiloApi = createApi({
  reducerPath: "heiloApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  endpoints: (builder) => ({}),
});

export default heiloApi;

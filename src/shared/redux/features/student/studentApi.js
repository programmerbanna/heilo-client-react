import heiloApi from "shared/redux/api";

const studentApi = heiloApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => "/user/getme",
    }),
  }),
});
export const { useGetUserInfoQuery } = studentApi;

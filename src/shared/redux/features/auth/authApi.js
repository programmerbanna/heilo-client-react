// internal imports
import heiloApi from "shared/redux/api";
import { userLoggedIn } from "./authSlice";

const authApi = heiloApi.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
      // async onQueryStarted(arg, { queryFulfilled, dispatch }) {
      //   try {
      //     const result = await queryFulfilled;

      //     localStorage.setItem(
      //       "auth",
      //       JSON.stringify({
      //         token: result?.data?.data?.token,
      //         user: result?.data?.data?.user,
      //       })
      //     );

      //     dispatch(
      //       userLoggedIn({
      //         token: result?.data?.data?.token,
      //         user: result?.data?.data?.user,
      //       })
      //     );
      //   } catch (error) {}
      // },
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: "/signin",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;

          localStorage.setItem(
            "auth",
            JSON.stringify({
              user: data?.user,
              token: data?.token,
            })
          );

          dispatch(
            userLoggedIn({
              user: data?.user,
              data: data?.token,
            })
          );
        } catch (error) {}
      },
    }),
  }),
});
export const { useUserRegisterMutation, useUserLoginMutation } = authApi;

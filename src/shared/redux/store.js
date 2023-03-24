import { configureStore } from "@reduxjs/toolkit";
import heiloApi from "./api";
import authSlice from "./features/auth/authSlice";

const store = configureStore({
  reducer: {
    [heiloApi.reducerPath]: heiloApi.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(heiloApi.middleware),
});
export default store;

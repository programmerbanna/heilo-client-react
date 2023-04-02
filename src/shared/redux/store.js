import { configureStore } from "@reduxjs/toolkit";
import heiloApi from "./api";
import authSlice from "./features/auth/authSlice";
import socketSlice from "./features/socket/socketSlice";

const store = configureStore({
  reducer: {
    [heiloApi.reducerPath]: heiloApi.reducer,
    auth: authSlice,
    socket: socketSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(heiloApi.middleware),
});
export default store;

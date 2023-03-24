import { configureStore } from "@reduxjs/toolkit";
import heiloApi from "./api";

const store = configureStore({
  reducer: {
    [heiloApi.reducerPath]: heiloApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(heiloApi.middleware),
});
export default store;

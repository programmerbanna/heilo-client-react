import io from "socket.io-client";
import { createSlice } from "@reduxjs/toolkit";
import store from "shared/redux/store";
import { PRODUCTION_SOCKET_URL, DEVELOPMENT_SOCKET_URL, NODE_ENV } from "env";

const API_URL =
  NODE_ENV === "production" ? PRODUCTION_SOCKET_URL : DEVELOPMENT_SOCKET_URL;

console.log("APi url..............", API_URL);
console.log("scocket url..............", PRODUCTION_SOCKET_URL);
console.log("NOde env..............", NODE_ENV);

const socket = io("https://chat-server-ikcu.onrender.com/"); // replace with your server URL

export const initSocket = () => {
  socket.on("connect", () => {
    console.log("Socket connected!");
  });

  socket.on("users", (users) => {
    store.dispatch(getUsers(users));
  });
};

const socketSlice = createSlice({
  name: "socket",
  initialState: {
    users: [],
  },
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { getUsers, addUser } = socketSlice.actions;
export default socketSlice.reducer;

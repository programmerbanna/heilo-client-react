import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: undefined,
    user: undefined,
  },
  reducers: {
    userLoggedIn: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.user = user;
    },
    userLoggedOut: (state, action) => {
      state.token = undefined;
      state.user = undefined;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;

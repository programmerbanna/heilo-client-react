import { createSlice } from "@reduxjs/toolkit";

const socketSlice = createSlice({
  name: "socket",
  initialState: {
    user: [],
  },
  reducers: {
    getUsers: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { getUsers } = socketSlice.actions;
export default socketSlice.reducer;

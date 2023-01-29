import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};
export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});
export const authAction = authSlice.actions;
export default authSlice.reducer;

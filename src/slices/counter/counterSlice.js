import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  counter: 0,
  showCounter: false,
};
export const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter += 1;
    },
    decrement: (state, action) => {
      state.counter -= 1;
    },
    increase: (state, action) => {
      state.counter += action.payload;
    },
    toggle: (state, action) => {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;

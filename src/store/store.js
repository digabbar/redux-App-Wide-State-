import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../slices/counter/counterSlice";
export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../slices/counter/counterSlice";
import AuthReducer from "../slices/Auth/authSlice";
export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    auth: AuthReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import count from "./slices/countSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    count, // 키와 값이 동일하면 생략 가능.
  },
});

export default store;

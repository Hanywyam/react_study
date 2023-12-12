// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import pixabayReducer from "./slice/pixabaySlice";
import swiperSlides from "./slice/swiperSlice";

const store = configureStore({
  reducer: {
    pixabay: pixabayReducer,
    swiperSlides,
  },
});

export default store;

// swiperSlice.js
import { createSlice } from "@reduxjs/toolkit";

const swiperSlice = createSlice({
  name: "swiperSlide",
  initialState: {
    // initialState 내부 작성도 가능.
    slides: [],
  },
  reducers: {
    setSwiperSlides: (state, action) => {
      state.slides = action.payload.map((img, idx) => ({
        id: idx + 1,
        ImageUrl: img.previewURL,
        tags: img.tags,
      }));
    },
  },
});

export const { setSwiperSlides } = swiperSlice.actions;
export default swiperSlice.reducer;

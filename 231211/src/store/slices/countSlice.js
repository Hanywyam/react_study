//countSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  num: 1,
  color: "#222",
  colors: ["#65B741", "#7E57C2", "#EA80FC", "#00BCD4", "#9BB8CD"],
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increase: (state) => {
      state.num += 1;
    },
    decrease: (state) => {
      state.num -= 1;
    },
    changeColor: (state, action) => {
      console.log(state, action);
      state.color = action.payload;
    },
  },
});

// 슬라이스에서 생성된 액션
export const { increase, decrease, changeColor } = countSlice.actions;

// 슬라이스에서 생성된 리듀서 함수 내보냄
export default countSlice.reducer;

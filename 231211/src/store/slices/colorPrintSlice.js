// colorPrintSlice.js
import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
  list: [],
};

export const colorPrintSlice = createSlice({
  name: "colorPrint",
  initialState,
  reducers: {
    add: (state, action) => {
      state.list = [
        ...state.list,
        { id: action.id, color: action.color, opacity: 1 },
      ];
    },

    update: (state, action) => {
      state.list = state.list.map((item) =>
        item.id === action.id ? { ...item, opacity: item.opacity - 0.1 } : item
      );
    },

    remove: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.id);
    },

    changeInput: (state, action) => {
      state.input = action.text;
    },
  },
});

// 슬라이스에서 생성된 액션
export const { add, update, remove, changeInput } = colorPrintSlice.actions;

// 슬라이스에서 생성된 리듀서 함수 내보냄
export default colorPrintSlice.reducer;

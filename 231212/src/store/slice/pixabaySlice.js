//pixabaySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
/* 
  const fetchUserById = createAsyncThunk("users/fetchByIdStatus", async () => {});
  Promise의 상태 3가지
   - pending :대기 중
   - fulfilled : 불러왔을 때
   - rejected :오류
*/

export const getPixabay = createAsyncThunk(
  "pixabay/requestPixabay",
  async () => {
    const res = await axios.get(
      "https://pixabay.com/api/?key=3349921-b39d4c9b1b61545e846dfad22&q=yellow+flowers&image_type=photo&pretty=true"
    );
    return res.data.hits;
  }
);

const initialState = {
  data: [], //데이터를 받아오는 상태
  isLoading: false, // 로딩 값
};

export const pixabaySlice = createSlice({
  name: "pixabay",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPixabay.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPixabay.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getPixabay.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default pixabaySlice.reducer;

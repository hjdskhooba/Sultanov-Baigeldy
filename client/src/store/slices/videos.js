import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { $mainApi } from "../../api";

export const getVideosAPI = createAsyncThunk(
  "videos/getVideosAPI",
  async () => {
    try {
      const response = await $mainApi.get("api/videos/");
      return response.data;
    } catch (error) {
      console.error("Error fetching slides:", error);
      throw error;
    }
  }
);

const initialState = {
  videoId1: "BlTnau7zTn8",
  videoId2: "LKYVJampeBg",
  error: "",
  isLoading: false,
};

const videosSLice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVideosAPI.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getVideosAPI.fulfilled, (state, action) => {
      state.videoId1 = action.payload[0].video_code;
      state.videoId2 = action.payload[1].video_code;
      state.isLoading = false;
    });
    builder.addCase(getVideosAPI.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default videosSLice.reducer;

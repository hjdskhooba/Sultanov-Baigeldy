import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { $mainApi } from "../../common";

export const getAwardsAPI = createAsyncThunk(
  "awards/getAwardsAPI",
  async () => {
    try {
      const response1 = await $mainApi("api/certificates/");
      const response2 = await $mainApi("api/review/");
      return [response1.data, response2.data];
    } catch (error) {
      console.error("Error fetching slides:", error);
      throw error;
    }
  }
);

const initialState = {
  certificates: [],
  reviews: [],
  error: "",
  isLoading: false,
};

const awardsSLice = createSlice({
  name: "awards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAwardsAPI.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAwardsAPI.fulfilled, (state, action) => {
      state.certificates = action.payload[0];
      state.reviews = action.payload[1];
      state.isLoading = false;
    });
    builder.addCase(getAwardsAPI.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default awardsSLice.reducer;

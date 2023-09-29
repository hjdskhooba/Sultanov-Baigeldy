import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { $mainApi } from "../../common";

export const getPhotosAPI = createAsyncThunk(
  "swiper/getPhotosAPI",
  async () => {
    try {
      const response1 = await $mainApi("api/logos/");
      const response2 = await $mainApi("api/photos/");
      return [response1.data, response2.data];
    } catch (error) {
      console.error("Error fetching slides:", error);
      throw error;
    }
  }
);

const initialState = {
  error: "",
  isLoading: false,
  logos: [{ img: "", id: 1 }, { img: "", id: 2 }, {}, {}, {}, {}, {}, {}],
  slides: [],
};

const swiperSlice = createSlice({
  name: "swiper",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPhotosAPI.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPhotosAPI.fulfilled, (state, action) => {
      state.logos = action.payload[0];
      state.slides = action.payload[1];
      state.isLoading = false;
    });
    builder.addCase(getPhotosAPI.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default swiperSlice.reducer;

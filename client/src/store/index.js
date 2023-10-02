import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./slices/projects";
import videosSLice from "./slices/videos";
import swiperSlice from "./slices/swiper";
import awardsSlice from "./slices/awards";

export const store = configureStore({
  reducer: {
    projects: projectsSlice,
    swiper: swiperSlice,
    videos: videosSLice,
    awards: awardsSlice,
  },
});

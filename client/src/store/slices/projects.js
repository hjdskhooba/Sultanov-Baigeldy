import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { $mainApi } from "../../api";

export const getProjectsList = createAsyncThunk(
  "projects/getProjectsList",
  async () => {
    try {
      const res = await $mainApi("api/projects/");
      const resCategories = await $mainApi("api/category/");
      return [res.data, resCategories.data];
    } catch (e) {
      console.error("Error: ", e);
    }
  }
);

export const getProjectById = createAsyncThunk(
  "projects/getProjectById",
  async (id) => {
    try {
      const res = await $mainApi(`api/projects/${id}/`);
      return res.data;
    } catch (e) {
      console.error("Error: ", e);
    }
  }
);

export const getProjectByIdKg = createAsyncThunk(
  "projects/getProjectByIdKg",
  async (id) => {
    try {
      const res = await $mainApi(`api/projects/${id}/?lang=ky`);
      return res.data;
    } catch (e) {
      console.error("Error: ", e);
    }
  }
);
export const getProjectPageByIdKg = createAsyncThunk(
  "projects/getProjectPageByIdKg",
  async (id) => {
    try {
      const res = await $mainApi(`api/projects/${id}/?lang=ky`);
      return res.data;
    } catch (e) {
      console.error("Error: ", e);
    }
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    categories: [],
    projectsList: [],
    titles: [],
    translateProject: {},
    project: {},
    count: 0,
    isLoading: false,
    isProject: false,
  },
  reducers: {
    getTitles: (state, action) => {
      state.titles = state.projectsList?.map((i) => {
        return {
          title:
            action.payload === "kg" && !i?.kg
              ? i?.title_KY
              : action.payload === "ru" && !i?.kg
              ? i?.title
              : action.payload === "kg" && i?.kg
              ? i?.title
              : i?.title_EN,
          id: i?.id,
        };
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProjectsList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProjectsList.fulfilled, (state, { payload }) => {
      state.projectsList = payload?.[0];
      state.categories = payload?.[1];
      state.count = payload?.[0]?.length;
      state.isLoading = false;
    });
    builder.addCase(getProjectById.pending, (state) => {
      state.isProject = false;
    });
    builder.addCase(getProjectById.fulfilled, (state, { payload }) => {
      state.project = payload;
      state.projectsList = [...state.projectsList, payload].filter(
        (obj, index, self) => {
          const firstIndex = self?.findIndex((item) => item?.id === obj?.id);
          return index === firstIndex;
        }
      );
      state.isProject = false;
    });
    builder.addCase(getProjectByIdKg.pending, (state) => {
      state.isProject = true;
    });
    builder.addCase(getProjectByIdKg.fulfilled, (state, { payload }) => {
      state.projectsList = state.projectsList.map((pr) =>
        pr?.id === payload?.id ? { ...payload, kg: true } : pr
      );
      state.isProject = false;
    });
    builder.addCase(getProjectPageByIdKg.fulfilled, (state, { payload }) => {
      state.translateProject = payload;
    });
    builder.addCase(getProjectsList.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { getTitles } = projectsSlice.actions;
export default projectsSlice.reducer;

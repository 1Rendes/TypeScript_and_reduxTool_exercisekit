import { createSlice } from "@reduxjs/toolkit";
import { getimages } from "./operations";

const INITIAL_STATE = {
  results: [],
};

export const imagesSlice = createSlice({
  name: "images",
  initialState: INITIAL_STATE,
  reducers: {
    cleanImagesData(state) {
      state.results = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getimages.fulfilled, (state, { payload }) => {
      state.results = [...state.results, ...payload.data.results];
    });
  },
});

export const imagesReducer = imagesSlice.reducer;
export const { cleanImagesData } = imagesSlice.actions;

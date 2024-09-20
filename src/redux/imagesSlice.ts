import { createSlice } from "@reduxjs/toolkit";
import { getimages } from "./operations";
import { ImagesData, ImageData } from "../types";

type Init = {
  results: ImagesData;
  modalData: ImageData;
};

const INITIAL_STATE: Init = {
  results: [],
  modalData: {
    id: 0,
  },
};

export const imagesSlice = createSlice({
  name: "images",
  initialState: INITIAL_STATE,
  reducers: {
    cleanImagesData(state) {
      state.results = [];
    },
    setModalData(state, { payload }) {
      if (payload) {
        state.modalData = state.results.find(
          (result) => result.id === payload
        ) || {
          id: 0,
        };
      } else
        state.modalData = {
          id: 0,
        };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getimages.fulfilled, (state, { payload }) => {
      state.results = [...state.results, ...payload.results];
    });
  },
});

export const imagesReducer = imagesSlice.reducer;
export const { cleanImagesData, setModalData } = imagesSlice.actions;

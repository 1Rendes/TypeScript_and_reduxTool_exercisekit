import { createSlice } from "@reduxjs/toolkit";
import { getimages } from "./operations";

const INITIAL_STATE = {
  results: [],
  modalData: {},
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
        state.modalData = state.results.find((result) => result.id === payload);
      } else state.modalData = {};
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

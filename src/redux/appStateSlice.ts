import { createSlice } from "@reduxjs/toolkit";
import { getimages } from "./operations";
import type { PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  total_pages: 1,
  page: 1,
  loader: false,
  error: "",
  query: "",
  modalToggle: false,
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState: INITIAL_STATE,
  reducers: {
    setPage(state) {
      state.page++;
    },
    setModalToggle(state) {
      state.modalToggle
        ? (state.modalToggle = false)
        : (state.modalToggle = true);
    },
    newSearch(state, { payload }: PayloadAction<string>) {
      state.page = 1;
      state.query = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getimages.pending, (state) => {
        state.loader = true;
        state.error = "";
      })
      .addCase(
        getimages.fulfilled,
        (state, { payload }: PayloadAction<{ total_pages: number }>) => {
          state.total_pages = payload.total_pages;
          state.loader = false;
        }
      )
      .addCase(getimages.rejected, (state, { payload }) => {
        state.loader = false;
        state.error = payload instanceof Error ? payload.message : 'Unknown error';
      });
  },
});

export const appStateReducer = appStateSlice.reducer;
export const { newSearch, setModalToggle, setPage } = appStateSlice.actions;

import { RootState } from "./store";

export const selectImagesData = (state: RootState) => state.images.results;
export const selectModalData = (state: RootState) => state.images.modalData;

export const selectTotalPages = (state: RootState) =>
  state.appState.total_pages;
export const selectPage = (state: RootState) => state.appState.page;
export const selectLoader = (state: RootState) => state.appState.loader;
export const selectError = (state: RootState) => state.appState.error;
export const selectQuery = (state: RootState) => state.appState.query;
export const selectModalToggle = (state: RootState) =>
  state.appState.modalToggle;

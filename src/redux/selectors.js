export const selectImagesData = (state) => state.images.results;

export const selectTotalPages = (state) => state.appState.total_pages;
export const selectPage = (state) => state.appState.page;
export const selectLoader = (state) => state.appState.loader;
export const selectError = (state) => state.appState.error;
export const selectQuery = (state) => state.appState.query;
export const selectModalToggle = (state) => state.appState.modalToggle;

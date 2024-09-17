import { configureStore } from "@reduxjs/toolkit";
import { appStateReducer } from "./AppStateSlice";
// import { modalReducer } from "./modalSlice";
import { imagesReducer } from "./ImagesSlice";

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    // modal: modalReducer,
    appState: appStateReducer,
  },
});

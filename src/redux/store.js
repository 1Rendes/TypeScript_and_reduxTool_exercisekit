import { configureStore } from "@reduxjs/toolkit";
import { appStateReducer } from "./appStateSlice";
// import { modalReducer } from "./modalSlice";
import { imagesReducer } from "./imagesSlice";

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    // modal: modalReducer,
    appState: appStateReducer,
  },
});

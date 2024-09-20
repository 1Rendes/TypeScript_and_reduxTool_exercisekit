import { configureStore } from "@reduxjs/toolkit";
import { appStateReducer } from "./appStateSlice";
import { imagesReducer } from "./imagesSlice";

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    appState: appStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./reducer/settingsSlice";

const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
});

export default store;
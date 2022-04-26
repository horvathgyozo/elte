import { configureStore } from "@reduxjs/toolkit";
import { haikuReducer } from "../features/haiku/haikuSlice";

export const store = configureStore({
  reducer: haikuReducer,
});

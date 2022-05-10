import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { nonogramApiSlice, nonogramApiSliceReducer } from "./nonogramApiSlice";
import { nonogramReducer } from "./nonogramSlice";

export const store = configureStore({
  reducer: {
    nonogram: nonogramReducer,
    auth: authReducer,
    // nonogramList: nonogramListReducer,
    [nonogramApiSlice.reducerPath]: nonogramApiSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nonogramApiSlice.middleware),
});

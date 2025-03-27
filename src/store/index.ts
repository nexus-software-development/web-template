import { AuthService } from "./services/auth";
import { AuthSlice } from "./slices";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // Services
    [AuthService.reducerPath]: AuthService.reducer,

    // Slices
    [AuthSlice.name]: AuthSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthService.middleware)
});

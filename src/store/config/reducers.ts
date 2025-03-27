import { combineReducers } from "@reduxjs/toolkit";
import { AuthSlice } from "@store/slices";
import { AuthService } from "../services/auth";

const reducer = combineReducers({
  // Services
  [AuthService.reducerPath]: AuthService.reducer,

  // Slices
  [AuthSlice.reducerPath]: AuthSlice.reducer
});

export { reducer };

export type RootState = ReturnType<typeof reducer>;

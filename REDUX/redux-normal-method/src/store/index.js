import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./reducers/productsReducer";
import { usersReducer } from "./reducers/usersReducer";

export const mainStore = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
  },
});

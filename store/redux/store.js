import { configureStore } from "@reduxjs/toolkit";

import favoritiesReducer from "./favorites";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritiesReducer,
  },
});

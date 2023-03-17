import { configureStore } from "@reduxjs/toolkit";
import { CustomReducer } from "./reducer";

const store = configureStore({
  reducer: {
    custom: CustomReducer,
  },
});

export default store;

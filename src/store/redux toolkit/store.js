import { configureStore } from "@reduxjs/toolkit";
import { CustomReducer } from "./reducer";

const store = configureStore({
  reducer: {
    custom: CustomReducer,
  },
});

export default store;

// import { configureStore } from '@reduxjs/toolkit'

// const store = configureStore({
//   reducer: {rightDrawerReducer},
// })
// export default store

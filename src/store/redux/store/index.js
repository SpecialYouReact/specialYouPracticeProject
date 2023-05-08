import { createStore } from "redux";
import rootReducer from "./reducers/index.js";

// const store = createStore(rootReducer);
const store = createStore(
  rootReducer
  // counterReducer
);
export default store;

// import { configureStore } from '@reduxjs/toolkit'

// const store = configureStore({
//   reducer: {rightDrawerReducer},
// })
// export default store

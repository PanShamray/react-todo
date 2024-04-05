// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reducers/todoReducer";

const store = configureStore({
  reducer: todoReducer,
});

export default store;

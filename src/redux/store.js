import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./addReducer";

const store = configureStore({
 reducer: {
 todos: addReducer,
 },
});

export default store;
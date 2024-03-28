import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice.js";
import configReducer from "./configSlice.js";
import hamBurgerReducer from "./hamBurgerSlice.js"
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config:configReducer,
    hamburger:hamBurgerReducer
  },
});

export default appStore;

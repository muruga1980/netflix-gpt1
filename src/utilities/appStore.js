import { configureStore } from "@reduxjs/toolkit";

import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";

import langReducer from "./langSlice";

const appStore = configureStore({
  reducer: {
    movies: movieReducer,
    gpt: gptReducer,
    lang: langReducer,
  },
});

export default appStore;

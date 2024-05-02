import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    searchBarshow: true,
    movieResults: null,
    movieNames: null,
  },

  reducers: {
    toggleGptSearchAction: (state) => {
      state.searchBarshow = !state.searchBarshow;
    },
    addGptMovieResults: (state, action) => {
      //extract action payload
      const { movieNames, movieResults } = action.payload;
      state.movieResults = movieResults;
      state.movieNames = movieNames;
    },
  },
});

export const { toggleGptSearchAction, addGptMovieResults } = gptSlice.actions;

export default gptSlice.reducer;

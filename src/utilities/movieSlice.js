import { createSlice } from "@reduxjs/toolkit";

const movileSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingmovies: null,
    popularMovies: null,
    getVideoKey: null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingmovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    getVideoKeyAction: (state, action) => {
      state.getVideoKey = action.payload;
    },
  },
});

//export from actions
export const { addNowPlayingMovies, addPopularMovies, getVideoKeyAction } =
  movileSlice.actions;

//export from reducers
export default movileSlice.reducer;

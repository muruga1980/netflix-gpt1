import { createSlice } from "@reduxjs/toolkit";

const movileSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingmovies: null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingmovies = action.payload;
    },
  },
});

//export from actions
export const { addNowPlayingMovies } = movileSlice.actions;

//export from reducers
export default movileSlice.reducer;

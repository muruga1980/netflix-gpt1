import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    searchBarshow: true,
  },

  reducers: {
    toggleGptSearchAction: (state) => {
      state.searchBarshow = !state.searchBarshow;
    },
  },
});

export const { toggleGptSearchAction } = gptSlice.actions;

export default gptSlice.reducer;

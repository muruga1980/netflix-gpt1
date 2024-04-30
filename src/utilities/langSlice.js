import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: {
    selectLang: "en",
  },

  reducers: {
    changelanuage: (state, action) => {
      state.selectLang = action.payload;
    },
  },
});

export const { changelanuage } = langSlice.actions;
export default langSlice.reducer;

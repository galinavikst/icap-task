import { createSlice } from "@reduxjs/toolkit";

export type SerchCatResponse = {};

type SearchState = {
  searchedCats: SerchCatResponse[];
};

const initialState = {
  searchedCats: [],
} as SearchState;

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchedCats(state, action) {
      state.searchedCats = action.payload;
    },
  },
});

export const { setSearchedCats } = searchSlice.actions;

export default searchSlice.reducer;

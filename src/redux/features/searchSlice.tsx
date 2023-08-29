import { createSlice } from "@reduxjs/toolkit";

export type SerchCatResponse = {
  id: string;
  breeds?: SerchCatResponse[] | undefined;
  height: number;
  url: string;
  width: number;
  name?: string;
  reference_image_id?: string;
};

type SearchState = {
  searchedCats: SerchCatResponse[][];
  searchInputValue: string;
};

const initialState = {
  searchedCats: [[]],
  searchInputValue: "",
} as SearchState;

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchedCats(state, action) {
      state.searchedCats = action.payload;
    },
    setSearchInputValue(state, action) {
      state.searchInputValue = action.payload;
    },
  },
});

export const { setSearchedCats, setSearchInputValue } = searchSlice.actions;

export default searchSlice.reducer;

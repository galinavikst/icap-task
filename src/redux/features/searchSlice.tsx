import { createSlice } from "@reduxjs/toolkit";
import { ProductTableRow } from "./tableSlice";

type SearchState = {
  searchedProducts: ProductTableRow[];
};

const initialState = {
  searchedProducts: [],
} as SearchState;

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchedProducts(state, action) {
      state.searchedProducts = action.payload;
    },
  },
});

export const { setSearchedProducts } = searchSlice.actions;

export default searchSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export interface ProductTableRow {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  rating: number;
  stock: number;
  category: string;
}

type TableState = {
  allProducts: ProductTableRow[];
  searchInputValue: string;
};

const initialState = {
  allProducts: [],
  searchInputValue: "",
} as TableState;

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setAllProducts(state, action) {
      state.allProducts = action.payload;
    },
  },
});

export const { setAllProducts } = tableSlice.actions;

export default tableSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { SerchCatResponse } from "./searchSlice";
import { getArrayForGridPattern } from "@/components/servise";

type BreedState = {
  breedsCats: SerchCatResponse[][];
  searchInputValue: string;
};

const initialState = {
  breedsCats: [[]],
  searchInputValue: "",
} as BreedState;

const breedsSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {
    setCatsAllBreeds(state, action) {
      const lastSet = state.breedsCats[state.breedsCats.length - 1];
      if (lastSet.length < 5) {
        lastSet.push(action.payload);
      } else {
        state.breedsCats.push([action.payload]);
      }
    },
    setSortedCats(state, action) {
      state.breedsCats = action.payload;
    },
  },
});

export const { setCatsAllBreeds, setSortedCats } = breedsSlice.actions;

export default breedsSlice.reducer;

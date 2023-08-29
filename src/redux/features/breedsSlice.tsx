import { createSlice } from "@reduxjs/toolkit";
import { SerchCatResponse } from "./searchSlice";

// export type BreedsCatResponse = {
//   id: string;
//   breeds?: BreedsCatResponse[] | undefined;
//   height?: number;
//   url: string;
//   width?: number;
//   name?: string;
// };

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
  },
});

export const { setCatsAllBreeds } = breedsSlice.actions;

export default breedsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export interface AddedBook {
  id: number;
  title: string;
  category: string;
  date: string;
  rating: number;
}

type AddBookState = {
  addedBooks: AddedBook[];
};

const initialState = {
  addedBooks: [],
} as AddBookState;

const addBookSlice = createSlice({
  name: "addBook",
  initialState,
  reducers: {
    setAddedBook(state, action) {
      state.addedBooks.push(action.payload);
    },
  },
});

export const { setAddedBook } = addBookSlice.actions;

export default addBookSlice.reducer;

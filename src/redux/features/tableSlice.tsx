import { createSlice } from "@reduxjs/toolkit";

export interface ITableRow {
  id: number | null;
  name: string;
  address: string;
  birthday_date: string;
  email: string;
  phone_number: string;
}

type TableState = {
  allRows: ITableRow[];
};

const initialState = {
  allRows: [],
} as TableState;

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setAllRows(state, action) {
      state.allRows = action.payload;
    },
  },
});

export const { setAllRows } = tableSlice.actions;

export default tableSlice.reducer;

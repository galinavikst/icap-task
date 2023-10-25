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
  limit: number;
};

const initialState = {
  allRows: [],
  limit: 10,
} as TableState;

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setAllRows(state, action) {
      state.allRows = action.payload;
    },
    setLimit(state, action) {
      state.limit = action.payload;
    },
  },
});

export const { setAllRows, setLimit } = tableSlice.actions;

export default tableSlice.reducer;

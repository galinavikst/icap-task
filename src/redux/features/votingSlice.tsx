import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type VotingState = {
  isActivePage: string;
};

// type InitialState = {
//   value: VotingState;
// };

const initialState = {
  // value: {
  isActivePage: "/",
} as VotingState;
//} as InitialState;

const votingSlice = createSlice({
  name: "voting",
  initialState,
  reducers: {
    setActivePage(state, action) {
      state.isActivePage = action.payload;
    },
  },
});

export const { setActivePage } = votingSlice.actions;

export default votingSlice.reducer;

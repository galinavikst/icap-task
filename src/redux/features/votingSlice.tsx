import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type VotingState = {
  isVotingActive: boolean;
};

// type InitialState = {
//   value: VotingState;
// };

const initialState = {
  // value: {
  isVotingActive: false,
} as VotingState;
//} as InitialState;

const votingSlice = createSlice({
  name: "voting",
  initialState,
  reducers: {
    setActivePage(state, action) {
      state.isVotingActive = action.payload;
    },
  },
});

export const { setActivePage } = votingSlice.actions;

export default votingSlice.reducer;

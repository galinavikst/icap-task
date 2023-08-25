import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RandomCatResponse {
  id: string;
  url: string;
  width: number;
  height: number;
}
export interface UserActions {
  time: string;
  id: string;
  imgSrc: string;
  clickedIcon: string;
}

type VotingState = {
  isActivePage: string;
  likedCats: RandomCatResponse[];
  disLikedCats: RandomCatResponse[];
  favCats: RandomCatResponse[];
  votedCats: RandomCatResponse[];
  randomCats: RandomCatResponse[];
  userActions: UserActions[];
};

const initialState = {
  isActivePage: "/",
  likedCats: [],
  disLikedCats: [],
  favCats: [],
  votedCats: [],
  randomCats: [],
  userActions: [],
} as VotingState;

const votingSlice = createSlice({
  name: "voting",
  initialState,
  reducers: {
    setActivePage(state, action) {
      state.isActivePage = action.payload;
    },
    addLikedCat(state, action) {
      state.likedCats.push(action.payload);
    },
    addDislickedCat(state, action) {
      state.disLikedCats.push(action.payload);
    },
    addFavCat(state, action) {
      state.favCats.push(action.payload);
    },
    addVotedCat(state, action) {
      state.votedCats.push(action.payload);
    },
    addRandomCat(state, action) {
      state.randomCats.push(action.payload);
    },
    addUserAction(state, action) {
      state.userActions.push(action.payload);
    },
  },
});

export const {
  setActivePage,
  addLikedCat,
  addDislickedCat,
  addVotedCat,
  addUserAction,
  addRandomCat,
  addFavCat,
} = votingSlice.actions;

export default votingSlice.reducer;

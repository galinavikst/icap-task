import { createSlice } from "@reduxjs/toolkit";
import { SerchCatResponse } from "./searchSlice";

export interface UserActions {
  time: string;
  id: string;
  imgSrc: string;
  clickedIcon: string;
}

type VotingState = {
  isActivePage: string;
  likedCats: SerchCatResponse[][];
  disLikedCats: SerchCatResponse[][];
  favCats: SerchCatResponse[][];
  votedCats: SerchCatResponse[];
  randomCats: SerchCatResponse[];
  userActions: UserActions[];
  userFavActions: UserActions[];
};

const initialState = {
  isActivePage: "/",
  likedCats: [[]],
  disLikedCats: [[]],
  favCats: [[]],
  votedCats: [],
  randomCats: [],
  userActions: [],
  userFavActions: [],
} as VotingState;

const votingSlice = createSlice({
  name: "voting",
  initialState,
  reducers: {
    setActivePage(state, action) {
      state.isActivePage = action.payload;
    },
    addLikedCat(state, action) {
      const lastSet = state.likedCats[state.likedCats.length - 1];

      if (lastSet.length < 5) {
        // If the last set has less than 5 objects, add the new cat to it
        lastSet.push(action.payload);
      } else {
        // If the last set is full, create a new set and add the new cat to it
        state.likedCats.push([action.payload]);
      }
    },
    addDislickedCat(state, action) {
      const lastSet = state.disLikedCats[state.disLikedCats.length - 1];
      if (lastSet.length < 5) {
        lastSet.push(action.payload);
      } else {
        state.disLikedCats.push([action.payload]);
      }
    },
    addFavCat(state, action) {
      const lastSet = state.favCats[state.favCats.length - 1];
      if (lastSet.length < 5) {
        lastSet.push(action.payload);
      } else {
        state.favCats.push([action.payload]);
      }
    },
    removeFavCat(state, action) {
      const catIdToRemove = action.payload;
      const updatedFavCats = state.favCats.map((catSet) =>
        catSet.filter((cat) => cat.id !== catIdToRemove)
      );
      return { ...state, favCats: updatedFavCats };
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
    addUserFavAction(state, action) {
      state.userFavActions.push(action.payload);
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
  removeFavCat,
  addUserFavAction,
} = votingSlice.actions;

export default votingSlice.reducer;

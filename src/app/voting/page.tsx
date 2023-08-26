"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  useGetCatByIdQuery,
  useGetRandomCatQuery,
  catApi,
} from "@/redux/features/apiSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState, useAppSelector } from "@/redux/store";
import {
  RandomCatResponse,
  UserActions,
  addDislickedCat,
  addFavCat,
  addLikedCat,
  addRandomCat,
  addUserAction,
  addVotedCat,
} from "@/redux/features/votingSlice";
import VotingBtns from "@/components/VotingBtns";
import Loader from "@/components/Loader";

export default function VotingPage() {
  const dispatch = useDispatch<AppDispatch>();
  const votedCats = useAppSelector((state) => state.voting.votedCats);
  const likedCats = useAppSelector((state) => state.voting.likedCats);
  const disLikedCats = useAppSelector((state) => state.voting.disLikedCats);
  const favCats = useAppSelector((state) => state.voting.favCats);
  const randomCats = useAppSelector((state) => state.voting.randomCats);
  const userActions = useAppSelector((state) => state.voting.userActions);

  // Using a query hook automatically fetches data and returns query values
  const { data, isLoading } = useGetRandomCatQuery();

  useEffect(() => {
    if (data) {
      dispatch(addRandomCat(data[0]));
    }
  }, [data, dispatch]);

  const actions = userActions.map((action) => {
    return (
      <li
        key={action.id}
        className="bg-stone-50 p-6 w-full flex justify-between rounded-2xl"
      >
        <div className="flex gap-9 items-center">
          <p className="bg-white rounded-xl p-2">{action.time}</p>
          <p className="text-neutral-400">
            Image ID: <b className="text-stone-900">{action.id}</b> was added to
            <span>{action.clickedIcon}</span>
          </p>
        </div>
        <Image src={action.imgSrc} width="20" height="20" alt="smile" />
      </li>
    );
  });

  return (
    <div className="bg-white rounded-2xl p-5">
      <div className="flex gap-2.5">
        <button className="py-2 px-3 text-rose-400 hover:text-white hover:bg-rose-400 bg-red-100 rounded-xl">
          &#x276E;
        </button>
        <button className="text-white hover:bg-red-100 hover:text-rose-400 bg-rose-400 p-2 text-center w-[145px] rounded-xl tracking-widest">
          VOTING
        </button>
      </div>
      <div
        className={`bg-cover bg-center relative rounded-2xl w-full h-[360px] mt-2.5 mb-20 `}
        style={{
          backgroundImage: `url(${randomCats[randomCats.length - 1]?.url})`,
        }}
      >
        {isLoading && <Loader />}
        <VotingBtns />
      </div>
      {likedCats.length > 0 && (
        <ul className="flex flex-col-reverse gap-2.5">{actions}</ul>
      )}
    </div>
  );
}

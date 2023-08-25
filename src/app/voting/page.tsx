"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  useGetPokemonByNameQuery,
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
import { getCurrentTime } from "@/components/servise";
import likeColor from "../../../public/like-color.svg";
import likeWhite from "../../../public/like-white-30.svg";
import favWhite from "../../../public/fav-white-30.svg";
import favEmpty from "../../../public/favorite.svg";
import dislikeWhite from "../../../public/dislike-white-30.svg";
import dislikeColor from "../../../public/dislike-color-30.svg";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

export default function VotingPage() {
  const dispatch = useDispatch<AppDispatch>();
  const votedCats = useAppSelector((state) => state.voting.votedCats);
  const likedCats = useAppSelector((state) => state.voting.likedCats);
  const disLikedCats = useAppSelector((state) => state.voting.disLikedCats);
  const favCats = useAppSelector((state) => state.voting.favCats);
  const randomCats = useAppSelector((state) => state.voting.randomCats);
  const userActions = useAppSelector((state) => state.voting.userActions);
  const [hovered, setHovered] = useState("");
  const [clicked, setClicked] = useState("");
  // Using a query hook automatically fetches data and returns query values
  const { data, isLoading } = useGetRandomCatQuery();

  useEffect(() => {
    if (data) {
      dispatch(addRandomCat(data[0]));
    }
  }, [data, dispatch]);

  const handleClick = async (
    clickedIcon: string,
    action: (userAction: RandomCatResponse) => ThunkAction<>,
    iconSrc: string
  ) => {
    const lastCat: RandomCatResponse = randomCats[randomCats.length - 1];
    setClicked(clickedIcon);

    if (lastCat) {
      dispatch(addVotedCat(lastCat));
      dispatch(action(lastCat));

      dispatch(
        addUserAction({
          imgSrc: iconSrc, //favEmpty
          id: lastCat.id,
          time: getCurrentTime(),
          clickedIcon: clickedIcon,
        })
      );
    }

    // Invalidate the 'RandomCat' tag to trigger a refetch
    dispatch(catApi.util.invalidateTags(["RandomCat"]));
  };

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

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  const handleMouseEnter = (icon: string) => {
    setHovered(icon);
  };

  const handleMouseLeave = () => {
    setHovered("");
  };

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
        <div className="absolute flex bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 border-4 border-white  rounded-2xl w-[250px] h-[80px] overflow-hidden">
          <button
            onClick={() => handleClick(" Likes", addLikedCat, likeColor)}
            onMouseEnter={() => handleMouseEnter("like")}
            onMouseLeave={handleMouseLeave}
            className="bg-green-300 hover:bg-green-opacity grow"
          >
            <Image
              className="mx-auto"
              src={hovered === "like" ? likeColor : likeWhite}
              width="30"
              height="30"
              alt="smile"
            />
          </button>
          <button
            onClick={() => handleClick(" Favorites", addFavCat, favEmpty)}
            onMouseEnter={() => handleMouseEnter("fav")}
            onMouseLeave={handleMouseLeave}
            className="bg-rose-400 hover:bg-rose-opacity border-x-4 border-white grow"
          >
            <Image
              className="mx-auto"
              src={hovered === "fav" ? favEmpty : favWhite}
              width="30"
              height="30"
              alt="heart"
            />
          </button>
          <button
            onClick={() =>
              handleClick(" Dislikes", addDislickedCat, dislikeColor)
            }
            onMouseEnter={() => handleMouseEnter("dislike")}
            onMouseLeave={handleMouseLeave}
            className="bg-amber-200 hover:bg-amber-opacity grow"
          >
            <Image
              className="mx-auto"
              src={hovered === "dislike" ? dislikeColor : dislikeWhite}
              width="30"
              height="30"
              alt="smile"
            />
          </button>
        </div>
      </div>
      {likedCats.length > 0 && (
        <ul className="flex flex-col-reverse gap-2.5">{actions}</ul>
      )}
    </div>
  );
}

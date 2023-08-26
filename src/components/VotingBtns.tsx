import { catApi } from "@/redux/features/apiSlice";
import Image from "next/image";
import {
  RandomCatResponse,
  addVotedCat,
  addUserAction,
  addLikedCat,
  addFavCat,
  addDislickedCat,
} from "@/redux/features/votingSlice";
import React, { useState } from "react";
import { getCurrentTime } from "./servise";
import { useDispatch } from "react-redux";
import likeColor from "../../public/like-color.svg";
import likeWhite from "../../public/like-white-30.svg";
import favWhite from "../../public/fav-white-30.svg";
import favEmpty from "../../public/favorite.svg";
import dislikeWhite from "../../public/dislike-white-30.svg";
import dislikeColor from "../../public/dislike-color-30.svg";
import { AppDispatch, useAppSelector } from "@/redux/store";

export default function VotingBtns() {
  const dispatch = useDispatch<AppDispatch>();
  const [hovered, setHovered] = useState("");

  const randomCats = useAppSelector((state) => state.voting.randomCats);

  const handleClick = async (
    clickedIcon: string,
    action: (userAction: RandomCatResponse) => any,
    iconSrc: string
  ) => {
    const lastCat: RandomCatResponse = randomCats[randomCats.length - 1];

    if (lastCat) {
      dispatch(addVotedCat(lastCat));
      dispatch(action(lastCat));

      dispatch(
        addUserAction({
          imgSrc: iconSrc,
          id: lastCat.id,
          time: getCurrentTime(),
          clickedIcon: clickedIcon,
        })
      );
    }

    // Invalidate the 'RandomCat' tag to trigger a refetch
    dispatch(catApi.util.invalidateTags(["RandomCat"]));
  };

  const handleMouseEnter = (icon: string) => {
    setHovered(icon);
  };

  const handleMouseLeave = () => {
    setHovered("");
  };

  return (
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
        onClick={() => handleClick(" Dislikes", addDislickedCat, dislikeColor)}
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
  );
}

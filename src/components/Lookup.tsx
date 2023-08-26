"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setActivePage } from "@/redux/features/votingSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import like from "../../public/like.svg";
import likeWhite from "../../public/like-white-30.svg";
import disLike from "../../public/dislike.svg";
import disLikeWhite from "../../public/dislike-white-30.svg";
import favorite from "../../public/favorite.svg";
import favoriteWhite from "../../public/fav-white-30.svg";

export default function Lookup() {
  const dispatch = useDispatch<AppDispatch>();
  const activeLink = useAppSelector((state) => state.voting.isActivePage);

  const handleClick = (linkName: string) => {
    dispatch(setActivePage(linkName));
  };

  return (
    <div className="flex gap-2.5">
      <div className="relative grow">
        <input
          className="py-3.5 px-5 rounded-2xl text-xl w-full"
          type="text"
          placeholder="Search for breeds by name"
        />
        <div className="absolute right-2.5 top-2.5 bg-red-100 p-2 rounded-xl">
          <Image src="/lup.svg" width="20" height="20" alt="lookup" />
        </div>
      </div>
      <div className="flex gap-2.5 grow-0">
        <Link
          onClick={() => handleClick("likes")}
          href="/likes"
          className={`hover:bg-red-100 flex p-3.5 rounded-2xl
          ${activeLink === "likes" ? "bg-rose-400" : "bg-white"}
          `}
        >
          <Image
            src={activeLink === "likes" ? likeWhite : like}
            width="30"
            height="30"
            alt="smile like"
          />
        </Link>
        <Link
          onClick={() => handleClick("favorites")}
          href="/favorites"
          className={`hover:bg-red-100 flex p-3.5 rounded-2xl
          ${activeLink === "favorites" ? "bg-rose-400" : "bg-white"}
          `}
        >
          <Image
            src={activeLink === "favorites" ? favoriteWhite : favorite}
            width="30"
            height="30"
            alt="heart favorite"
          />
        </Link>
        <Link
          onClick={() => handleClick("dislike")}
          href="/dislike"
          className={`hover:bg-red-100 flex p-3.5 rounded-2xl
          ${activeLink === "dislike" ? "bg-rose-400" : "bg-white"}
          `}
        >
          <Image
            src={activeLink === "dislike" ? disLikeWhite : disLike}
            width="30"
            height="30"
            alt="smile dislike"
          />
        </Link>
      </div>
    </div>
  );
}

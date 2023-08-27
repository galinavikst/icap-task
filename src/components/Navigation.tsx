"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { setActivePage } from "@/redux/features/votingSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { setSearchInputValue } from "@/redux/features/searchSlice";

export default function Navigation() {
  const dispatch = useDispatch<AppDispatch>();
  const activeLink = useAppSelector((state) => state.voting.isActivePage);

  const handleClick = (linkName: string) => {
    dispatch(setActivePage(linkName));
    dispatch(setSearchInputValue(""));
  };

  return (
    <nav className="flex gap-4 flex-wrap py-2.5">
      <Link href="/voting" onClick={() => handleClick("voting")}>
        <div className="group cursor-pointer flex flex-col gap-2.5 ">
          <div
            className={`${
              activeLink === "voting"
                ? "border-rose-100"
                : "border-indigo-300/60"
            } border-4  group-hover:border-indigo-300 w-[140px] h-[200px] flex justify-center items-center bg-indigo-300 rounded-2xl`}
          >
            <Image
              src="/vote-table.png"
              width={100}
              height={100}
              alt="vote table"
            />
          </div>
          <button
            className={`w-full group-hover:bg-red-100  ${
              activeLink === "voting"
                ? "bg-rose-400 text-white"
                : "bg-white text-rose-400"
            } rounded-lg py-2.5  text-xs font-medium tracking-widest`}
          >
            VOTING
          </button>
        </div>
      </Link>
      <Link href="/breeds" onClick={() => handleClick("breeds")}>
        <div className="group cursor-pointer flex flex-col gap-2.5">
          <div
            className={`${
              activeLink === "breeds"
                ? "border-rose-100"
                : "border-green-opacity"
            } border-4  group-hover:border-green-300 w-[140px] h-[200px] flex justify-center items-center bg-green-300 rounded-2xl`}
          >
            <Image src="/pet-breeds.png" width={100} height={100} alt="cat" />
          </div>
          <button
            className={`w-full  ${
              activeLink === "breeds"
                ? "bg-rose-400 text-white"
                : "bg-white text-rose-400"
            } group-hover:bg-red-100 rounded-lg py-2.5 text-xs font-medium tracking-widest`}
          >
            BREEDS
          </button>
        </div>
      </Link>
      <Link href="/gallery" onClick={() => handleClick("gallery")}>
        <div className="group cursor-pointer flex flex-col gap-2.5 ">
          <div
            className={`${
              activeLink === "gallery"
                ? "border-rose-100"
                : "border-amber-opacity"
            } border-4 group-hover:border-amber-200 w-[140px] h-[200px] flex justify-center items-end bg-amber-200 rounded-2xl`}
          >
            <Image
              src="/images-search.png"
              width={100}
              height={100}
              alt="hand holds phone"
            />
          </div>
          <button
            className={`w-full ${
              activeLink === "gallery"
                ? "bg-rose-400 text-white"
                : "bg-white text-rose-400"
            } group-hover:bg-red-100 rounded-lg py-2.5 text-xs font-medium tracking-widest`}
          >
            GALLERY
          </button>
        </div>
      </Link>
    </nav>
  );
}

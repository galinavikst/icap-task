"use client";
import React, { useState } from "react";
import Image from "next/image";
import arrowUp from "../../public/sort-20.svg";
import arrowUpColor from "../../public/sort-color-20.svg";
import arrowDown from "../../public/soft-revert-20.svg";
import arrowDownColor from "../../public/sort-revert-color-20.svg";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setSortedCats } from "@/redux/features/breedsSlice";
import { SerchCatResponse } from "@/redux/features/searchSlice";
import { getArrayForGridPattern } from "./servise";

export default function SortBtns() {
  const [sorted, setSorted] = useState("");
  const breedsCats = useAppSelector((state) => state.breeds.breedsCats);
  const dispatch = useDispatch();

  const ABSort = (arr: SerchCatResponse[][]) => {
    const flattedArr = arr
      .flat()
      .sort((a: any, b: any) => a.name.localeCompare(b.name));
    const stateArr = getArrayForGridPattern(flattedArr);
    dispatch(setSortedCats(stateArr));
    setSorted("ab");
  };

  const BASort = (arr: SerchCatResponse[][]) => {
    const flattedArr = arr
      .flat()
      .sort((a: any, b: any) => b.name.localeCompare(a.name));
    const stateArr = getArrayForGridPattern(flattedArr);
    dispatch(setSortedCats(stateArr));
    setSorted("ba");
  };

  return (
    <>
      <button
        onClick={() => {
          BASort(breedsCats);
        }}
        className="grow-0 bg-page-bg-color p-2 rounded-xl hover:outline-none hover:ring hover:ring-red-100"
      >
        <Image
          src={sorted === "ba" ? arrowUpColor : arrowUp}
          width="20"
          height="20"
          alt="arrow up"
        />
      </button>
      <button
        onClick={() => {
          ABSort(breedsCats);
        }}
        className="grow-0 bg-page-bg-color p-2 rounded-xl hover:outline-none hover:ring hover:ring-red-100"
      >
        <Image
          src={sorted === "ab" ? arrowDownColor : arrowDown}
          width="20"
          height="20"
          alt="arrow down"
        />
      </button>
    </>
  );
}

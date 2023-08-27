"use client";
import GridImgPattern from "@/components/GridImgPattern";
import NoItems from "@/components/NoItems";
import { useAppSelector } from "@/redux/store";
import React from "react";

export default function SearchPage() {
  const searchedCats = useAppSelector((state) => state.search.searchedCats);

  return (
    <div className="bg-white rounded-2xl p-5">
      <div className="flex gap-2.5">
        <button className="py-2 px-3 text-rose-400 hover:text-white hover:bg-rose-400 bg-red-100 rounded-xl">
          &#x276E;
        </button>
        <button className="text-white hover:bg-red-100 hover:text-rose-400 bg-rose-400 p-2 text-center w-[145px] rounded-xl tracking-widest">
          LIKES
        </button>
      </div>
      {searchedCats.length === 0 && <NoItems />}
      {/* <GridImgPattern catsArr={searchedCats} /> */}
    </div>
  );
}

"use client";
import GridImgPattern from "@/components/GridImgPattern";
import { useAppSelector } from "@/redux/store";
import React from "react";

export default function LikePage() {
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
      <GridImgPattern />
      <ul>
        <li className="bg-stone-50 p-6 w-full flex justify-between rounded-2xl">
          <div className="flex gap-9 items-center">
            <p className="bg-white rounded-xl p-2">22:35</p>
            <p className="text-neutral-400">
              Image ID: <b className="text-stone-900">fQSunHvl8</b> was removed
              from Likes
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

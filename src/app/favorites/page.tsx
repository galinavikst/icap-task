"use client";
import GridImgPattern from "@/components/GridImgPattern";
import NoItems from "@/components/NoItems";
import { useAppSelector } from "@/redux/store";
import React from "react";

export default function FavoritePage() {
  const favCats = useAppSelector((state) => state.voting.favCats);
  const userFavActions = useAppSelector((state) => state.voting.userFavActions);

  const actions = userFavActions.map((action) => {
    return (
      <li
        key={action.id}
        className="bg-page-bg-color p-6 my-2.5 w-full flex justify-between rounded-2xl"
      >
        <div className="flex gap-9 items-center">
          <p className="bg-white rounded-xl p-2">{action.time}</p>
          <p className="text-neutral-400">
            Image ID: <b className="text-stone-900">{action.id}</b> was removed
            from Favorites
          </p>
        </div>
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
          FAVORITES
        </button>
      </div>
      {favCats[0].length === 0 && <NoItems />}
      <GridImgPattern catsArr={favCats} />
      <ul>{actions}</ul>
    </div>
  );
}

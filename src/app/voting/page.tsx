import React from "react";
import Image from "next/image";

export default function VotingPage() {
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
      <div className="bg-black relative rounded-2xl w-full h-[360px] mt-2.5 mb-20">
        <Image src="/" width="20" height="20" alt="cat" />
        <div className="absolute flex bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 border-4 border-white  rounded-2xl w-[250px] h-[80px] overflow-hidden">
          <button className="bg-green-300 hover:bg-green-opacity grow">
            <Image
              className="mx-auto"
              src="/like-white-30.svg"
              width="30"
              height="30"
              alt="smile"
            />
          </button>
          <button className="bg-rose-400 hover:bg-rose-opacity border-x-4 border-white grow">
            <Image
              className="mx-auto"
              src="/fav-white-30.svg"
              width="30"
              height="30"
              alt="heart"
            />
          </button>
          <button className="bg-amber-200 hover:bg-amber-opacity grow">
            <Image
              className="mx-auto"
              src="/dislike-white-30.svg"
              width="30"
              height="30"
              alt="smile"
            />
          </button>
        </div>
      </div>
      <ul>
        <li className="bg-stone-50 p-6 w-full flex justify-between rounded-2xl">
          <div className="flex gap-9 items-center">
            <p className="bg-white rounded-xl p-2">22:35</p>
            <p className="text-neutral-400">
              Image ID: <b className="text-stone-900">fQSunHvl8</b> was added to
              <span> Favourites</span>
            </p>
          </div>
          <Image src="/" width="20" height="20" alt="smile" />
        </li>
      </ul>
    </div>
  );
}

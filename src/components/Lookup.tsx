import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Lookup() {
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
          href="/likes"
          className="bg-white hover:bg-red-100 flex p-3.5 rounded-2xl"
        >
          <Image src="/like.svg" width="30" height="30" alt="smile like" />
        </Link>
        <Link
          href="/favorites"
          className="bg-white hover:bg-red-100 flex p-3.5 rounded-2xl"
        >
          <Image
            src="/favorite.svg"
            width="30"
            height="30"
            alt="heart favorite"
          />
        </Link>
        <Link
          href="/dislike"
          className="bg-white hover:bg-red-100 flex p-3.5 rounded-2xl"
        >
          <Image
            src="/dislike.svg"
            width="30"
            height="30"
            alt="smile dislike"
          />
        </Link>
      </div>
    </div>
  );
}

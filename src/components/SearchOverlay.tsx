import { SerchCatResponse } from "@/redux/features/searchSlice";
import { useAppSelector } from "@/redux/store";
import React from "react";

interface SearchOverlayProps {
  item: SerchCatResponse;
}

export default function SearchOverlay({ item }: SearchOverlayProps) {
  const activePage = useAppSelector((state) => state.voting.isActivePage);

  const handleClick = () => {
    console.log("hi");
  };
  return (
    <div
      className={`absolute top-0 bottom-0 w-full flex items-end justify-center`}
    >
      <div
        className="absolute top-0 bottom-0 w-full bg-rose-400 "
        style={{ opacity: 0.4 }}
      ></div>
      <button
        onClick={activePage === "breeds" ? handleClick : undefined}
        className="bg-white p-2.5 m-2.5 rounded-xl relative z-1"
      >
        <p className="text-rose-400">
          {activePage === "breeds"
            ? item.name
            : item?.breeds?.[0]?.name || "not found breed"}
        </p>
      </button>
    </div>
  );
}

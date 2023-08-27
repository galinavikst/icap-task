import { SerchCatResponse } from "@/redux/features/searchSlice";
import React from "react";

interface SearchOverlayProps {
  item: SerchCatResponse;
}

export default function SearchOverlay({ item }: SearchOverlayProps) {
  return (
    <div
      className={`absolute top-0 bottom-0 w-full flex items-end justify-center`}
    >
      <div
        className="absolute top-0 bottom-0 w-full bg-rose-400 "
        style={{ opacity: 0.4 }}
      ></div>
      <div className="bg-white p-2.5 m-2.5 rounded-xl relative z-1">
        <p className="text-rose-400">
          {item?.breeds?.[0]?.name || "not found breed"}
        </p>
      </div>
    </div>
  );
}

import Image from "next/image";
import { useState } from "react";
import favorite from "../../public/favorite.svg";
import favoriteFull from "../../public/fav-color-30.svg";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { addUserFavAction, removeFavCat } from "@/redux/features/votingSlice";
import { getCurrentTime } from "./servise";

interface FavOverlayPrors {
  itemId: string;
}

export default function FavOverlay({ itemId }: FavOverlayPrors) {
  const dispatch = useDispatch<AppDispatch>();
  const [hovered, setHovered] = useState(false);

  const handleClick = (itemId: string) => {
    dispatch(removeFavCat(itemId));
    dispatch(
      addUserFavAction({
        id: itemId,
        time: getCurrentTime(),
      })
    );
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="absolute top-0 bottom-0 w-full flex justify-center items-center">
      <div
        className="absolute top-0 bottom-0 w-full bg-rose-400 "
        style={{ opacity: 0.4 }}
      ></div>
      <button
        onClick={() => handleClick(itemId)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="bg-white p-2.5 rounded-xl relative z-1"
      >
        <Image
          src={hovered ? favorite : favoriteFull}
          width={30}
          height={30}
          alt="heart"
        />
      </button>
    </div>
  );
}

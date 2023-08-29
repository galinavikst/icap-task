import { useAppSelector } from "@/redux/store";
import React, { useState } from "react";
import FavOverlay from "./FavOverlay";
import { SerchCatResponse } from "@/redux/features/searchSlice";
import SearchOverlay from "./SearchOverlay";

interface GridImgPatternProps {
  catsArr: SerchCatResponse[][];
}

export default function GridImgPattern({ catsArr }: GridImgPatternProps) {
  const activePage = useAppSelector((state) => state.voting.isActivePage);

  const [hovered, setHovered] = useState("");
  const handleMouseEnter = (id: string) => {
    setHovered(id);
  };
  const handleMouseLeave = () => {
    setHovered("");
  };

  const cats: JSX.Element[] = [];

  catsArr.forEach((catSet, index) => {
    const catSetGrid = (
      <ul
        key={index}
        className="grid grid-cols-3 grid-rows-3 gap-2.5  w-full" //h-[460px]
      >
        {catSet[0] && (
          <li
            key={catSet[0].id}
            onMouseEnter={() => handleMouseEnter(catSet[0].id)}
            onMouseLeave={handleMouseLeave}
            className={`${
              index % 2 === 0 ? "order-1" : "order-3"
            } h-36 col-span-1 bg-cover bg-center relative rounded-2xl overflow-hidden`}
            style={{ backgroundImage: `url('${catSet[0].url}')` }}
          >
            {hovered === catSet[0].id && activePage === "favorites" && (
              <FavOverlay itemId={catSet[0].id} />
            )}
            {hovered === catSet[0].id &&
              (activePage === "search" || activePage === "breeds") && (
                <SearchOverlay item={catSet[0]} />
              )}
          </li>
        )}
        {catSet[1] && (
          <li
            key={catSet[1].id}
            onMouseEnter={() => handleMouseEnter(catSet[1].id)}
            onMouseLeave={handleMouseLeave}
            className={`order-2 col-span-1 bg-cover bg-center relative rounded-2xl overflow-hidden`}
            style={{ backgroundImage: `url('${catSet[1].url}')` }}
          >
            {hovered === catSet[1].id && activePage === "favorites" && (
              <FavOverlay itemId={catSet[1].id} />
            )}
            {hovered === catSet[1].id &&
              (activePage === "search" || activePage === "breeds") && (
                <SearchOverlay item={catSet[1]} />
              )}
          </li>
        )}
        {catSet[2] && (
          <li
            key={catSet[2].id}
            onMouseEnter={() => handleMouseEnter(catSet[2].id)}
            onMouseLeave={handleMouseLeave}
            className={`${
              index % 2 === 0 ? "order-3" : "order-1"
            } row-span-2 bg-cover bg-center relative rounded-2xl overflow-hidden `}
            style={{ backgroundImage: `url('${catSet[2].url}')` }}
          >
            {hovered === catSet[2].id && activePage === "favorites" && (
              <FavOverlay itemId={catSet[2].id} />
            )}
            {hovered === catSet[2].id &&
              (activePage === "search" || activePage === "breeds") && (
                <SearchOverlay item={catSet[2]} />
              )}
          </li>
        )}
        {catSet[3] && (
          <li
            key={catSet[3].id}
            onMouseEnter={() => handleMouseEnter(catSet[3].id)}
            onMouseLeave={handleMouseLeave}
            className={`order-4 row-span-2 col-span-2 bg-cover bg-center relative rounded-2xl overflow-hidden `}
            style={{ backgroundImage: `url('${catSet[3].url}')` }}
          >
            {hovered === catSet[3].id && activePage === "favorites" && (
              <FavOverlay itemId={catSet[3].id} />
            )}
            {hovered === catSet[3].id &&
              (activePage === "search" || activePage === "breeds") && (
                <SearchOverlay item={catSet[3]} />
              )}
          </li>
        )}
        {catSet[4] && (
          <li
            key={catSet[4].id}
            onMouseEnter={() => handleMouseEnter(catSet[4].id)}
            onMouseLeave={handleMouseLeave}
            className={`order-5 row-span-1 bg-cover bg-center relative rounded-2xl overflow-hidden`}
            style={{ backgroundImage: `url('${catSet[4].url}')` }}
          >
            {hovered === catSet[4].id && activePage === "favorites" && (
              <FavOverlay itemId={catSet[4].id} />
            )}
            {hovered === catSet[4].id &&
              (activePage === "search" || activePage === "breeds") && (
                <SearchOverlay item={catSet[4]} />
              )}
          </li>
        )}
      </ul>
    );

    cats.push(
      <li key={`set${index}`} className="my-2.5">
        {catSetGrid}
      </li>
    );
  });

  return <ul>{cats}</ul>;
}

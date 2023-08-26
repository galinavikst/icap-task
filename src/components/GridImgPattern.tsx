import { useAppSelector } from "@/redux/store";
import React from "react";

export default function GridImgPattern() {
  const likedCatsArr = useAppSelector((state) => state.voting.likedCats);
  const cats: JSX.Element[] = [];

  likedCatsArr.forEach((catSet, index) => {
    const catSetGrid = (
      <ul
        key={index}
        className="grid grid-cols-3 grid-rows-3 gap-2.5  w-full h-[460px]"
      >
        <li
          key={catSet[0]?.id}
          className={`${
            index % 2 === 0 ? "order-3" : "order-1"
          } row-span-2 bg-cover bg-center relative rounded-2xl  `}
          style={{ backgroundImage: `url('${catSet[0]?.url}')` }}
        ></li>
        <li
          key={catSet[1]?.id}
          className={`order-2 col-span-1 bg-cover bg-center relative rounded-2xl `}
          style={{ backgroundImage: `url('${catSet[1]?.url}')` }}
        ></li>
        <li
          key={catSet[2]?.id}
          className={`${
            index % 2 === 0 ? "order-1" : "order-3"
          } col-span-1 bg-cover bg-center relative rounded-2xl  `}
          style={{ backgroundImage: `url('${catSet[2]?.url}')` }}
        ></li>
        <li
          key={catSet[3]?.id}
          className={`order-4 row-span-2 col-span-2 bg-cover bg-center relative rounded-2xl  `}
          style={{ backgroundImage: `url('${catSet[3]?.url}')` }}
        ></li>
        <li
          key={catSet[4]?.id}
          className={`order-5 row-span-1 bg-cover bg-center relative rounded-2xl `}
          style={{ backgroundImage: `url('${catSet[4]?.url}')` }}
        ></li>
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

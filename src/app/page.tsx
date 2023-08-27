"use client";
import { useAppSelector } from "@/redux/store";
import Image from "next/image";

export default function Home() {
  const activeLink = useAppSelector((state) => state.voting.isActivePage);

  return (
    <>
      {activeLink === "/" && (
        <div className="flex absolute top-0 right-0 w-1/2  p-7 h-[100vh] ">
          <div className="absolute w-[105%] h-full right-0 top-0">
            <Image
              src="/girl-and-pet-1.png"
              layout="fill"
              alt="girl with pet"
              priority={true}
            />
          </div>
          <div className="bg-red-100  w-full h-full rounded-2xl"></div>
        </div>
      )}
    </>
  );
}

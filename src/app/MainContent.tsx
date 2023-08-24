"use client";
import React from "react";
import { AppDispatch, useAppSelector } from "@/redux/store";
import Lookup from "@/components/Lookup";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setActivePage } from "@/redux/features/votingSlice";

export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const activeLink = useAppSelector((state) => state.voting.isActivePage);

  return (
    <main className="flex relative p-7 h-[100vh] w-full container mx-auto">
      <div className="flex justify-center w-1/2 h-full">
        <div className="flex flex-col gap-16">
          <Link onClick={() => dispatch(setActivePage("/"))} href="/">
            <Image src="/logo.png" width={105} height={25} alt="logo" />
          </Link>
          <div className="flex flex-col gap-2.5">
            <p className="text-4xl font-medium">Hi!👋</p>
            <h2 className="text-xl font-normal text-neutral-400">
              Welcome to MacPaw Bootcamp 2023
            </h2>
          </div>
          <div>
            <p className="text-xl font-medium">Lets start using The Cat API</p>
            <Navigation />
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-2.5">
        {activeLink !== "/" && <Lookup />}
        {children}
      </div>
    </main>
  );
}

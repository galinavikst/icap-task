"use client";
import React, { EventHandler, FormEventHandler, useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setActivePage } from "@/redux/features/votingSlice";
import { AppDispatch } from "@/redux/store";
import { useGetCatByBreedsNameQuery } from "@/redux/features/apiSlice";
import { setSearchedCats } from "@/redux/features/searchSlice";

export default function SearchForm() {
  const dispatch = useDispatch<AppDispatch>();

  const { data, isLoading } = useGetCatByBreedsNameQuery("beng");
  console.log(data);

  useEffect(() => {
    if (data) {
      dispatch(setSearchedCats(data));
    }
  }, []);

  const handleInputFocus = () => {
    dispatch(setActivePage("/search"));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="relative grow">
      <form onSubmit={handleSubmit}>
        <input
          // onFocus={handleInputFocus}
          className="py-3.5 px-5 rounded-2xl text-xl w-full hover:ring hover:ring-red-100 outline-none focus:ring focus:ring-rose-400"
          type="text"
          placeholder="Search for breeds by name"
        />
      </form>
      <div className="absolute right-2.5 top-2.5 bg-red-100 p-2 rounded-xl">
        <Image src="/lup.svg" width="20" height="20" alt="lookup" />
      </div>
    </div>
  );
}

"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setActivePage } from "@/redux/features/votingSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useGetCatByBreedsNameQuery } from "@/redux/features/apiSlice";
import {
  setSearchInputValue,
  setSearchedCats,
} from "@/redux/features/searchSlice";
import { useRouter } from "next/navigation";

export default function SearchForm() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const searchInputValue = useAppSelector(
    (state) => state.search.searchInputValue
  );

  const { data } = useGetCatByBreedsNameQuery(searchInputValue);

  useEffect(() => {
    if (data) {
      const resultArray = [];

      for (let i = 0; i < data.length; i += 5) {
        const batch = data.slice(i, i + 5);
        resultArray.push(batch);
      }

      dispatch(setSearchedCats(resultArray));
    }
  }, [data, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchInputValue(e.target.value));
  };

  const handleInputFocus = () => {
    dispatch(setActivePage("search"));
    router.push("search");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="relative grow">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={searchInputValue}
          onFocus={handleInputFocus}
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

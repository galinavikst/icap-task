"use client";
import React, { useEffect, useState } from "react";
import {
  useGetAllBreedsQuery,
  useGetCatByIdQuery,
} from "@/redux/features/apiSlice";
import { setCatsAllBreeds, setSortedCats } from "@/redux/features/breedsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import NoItems from "@/components/NoItems";
import GridImgPattern from "@/components/GridImgPattern";
import { getCatById } from "@/components/servise";
import { SerchCatResponse } from "@/redux/features/searchSlice";
import SortBtns from "@/components/SortBtns";

export default function BreedsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [optionsArr, setOptions] = useState<string[]>([]);
  const [catId, setCatId] = useState<string | symbol>();

  const breedsCatsArr = useAppSelector((state) => state.breeds.breedsCats);

  const { data: allBreedsData, isLoading: allBreedsIsLoading } =
    useGetAllBreedsQuery();

  //const { data: catByIdData, isLoading: catByIdIsLoading } =
  // useGetCatByIdQuery(catId);

  useEffect(() => {
    if (allBreedsData) {
      setOptions(allBreedsData.map((cat: SerchCatResponse) => cat.name));
    }
  }, [allBreedsData]);

  useEffect(() => {
    if (allBreedsData) {
      const fetchCatDetails = async () => {
        const catIds = allBreedsData.map(
          (cat: SerchCatResponse) => cat.reference_image_id
        );

        const fetchPromises = catIds.map(async (catId: string) => {
          const catById = await getCatById(catId);
          console.log(catById);

          if (catById) {
            dispatch(
              setCatsAllBreeds({
                id: catId,
                url: catById.url,
                name:
                  allBreedsData.find(
                    (cat: SerchCatResponse) => cat.reference_image_id === catId
                  )?.name || "",
              })
            );
          }
        });

        await fetchPromises;
      };

      fetchCatDetails();
    }

    //dispatch(setSortedCats(stateArr));
  }, [allBreedsData, dispatch]);

  const options = optionsArr.map((catName) => {
    return (
      <option key={catName} value="">
        {catName}
      </option>
    );
  });

  return (
    <div className="bg-white rounded-2xl p-5">
      <div className="flex gap-2.5">
        <button className="py-2 px-3 text-rose-400 hover:text-white hover:bg-rose-400 bg-red-100 rounded-xl">
          &#x276E;
        </button>
        <div className="text-white hover:bg-red-100 hover:text-rose-400 bg-rose-400 p-2 text-center w-[145px] rounded-xl tracking-widest">
          BREEDS
        </div>
        <select
          name=""
          id=""
          className="grow bg-page-bg-color rounded-xl p-2.5 focus:outline-none focus:ring focus:ring-red-100"
        >
          <option value="">All breeds</option>
          {options}
        </select>
        <select
          name=""
          id=""
          className="grow bg-page-bg-color rounded-xl p-2.5 focus:outline-none focus:ring focus:ring-red-100"
        >
          <option value="">Limit 5</option>
          <option selected value="">
            Limit 10
          </option>
          <option value="">Limit 15</option>
          <option value="">Limit 20</option>
        </select>
        <SortBtns />
      </div>
      {breedsCatsArr.length === 0 && <NoItems />}

      <GridImgPattern catsArr={breedsCatsArr} />
    </div>
  );
}

"use client";
import React, { useState } from "react";
import { useGetProductByQueryQuery } from "@/redux/features/apiSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import NoItems from "@/components/NoItems";
import { setSearchedProducts } from "@/redux/features/searchSlice";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Box, List, ListItem } from "@mui/material";
import AppTittle from "@/components/AppTittle";
import Loader from "@/components/Loader";
import CardItem from "@/components/CardItem";

export default function SearchPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue, setInputValue] = useState<any>(null);

  const searchedArr = useAppSelector((state) => state.search.searchedProducts);

  const { data, isLoading } = useGetProductByQueryQuery(inputValue);
  if (data) {
    dispatch(setSearchedProducts(data.products));
  }

  const cards = searchedArr.map((prod) => {
    return (
      <ListItem key={prod.title} className="w-full flex justify-center">
        <CardItem prod={prod} />
      </ListItem>
    );
  });

  return (
    <Box className="flex flex-col justify-center items-center">
      <AppTittle />
      <Paper
        component="form"
        sx={{
          my: 5,
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "50%",
          minWidth: 275,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Name or Category"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      {(isLoading && <Loader />) || (inputValue === null && <NoItems />)}
      {data && (
        <List className="w-full columns-1 md:columns-2 lg:columns-3">
          {cards}
        </List>
      )}
    </Box>
  );
}

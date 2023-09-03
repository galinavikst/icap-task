"use client";
import React from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import ViewListIcon from "@mui/icons-material/ViewList";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Paper } from "@mui/material";

export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex relative  h-[100vh] w-full container mx-auto">
      <nav className="flex flex-col w-[10%] fixed bg-red-100 p-2.5 gap-2.5 justify-center  h-full">
        <Link className="grow hover:scale-95" href={"search"}>
          <Paper className=" h-full flex justify-center items-center">
            <SearchIcon className="" />
          </Paper>
        </Link>
        <Link className="grow hover:scale-95" href={"table"}>
          <Paper className=" h-full flex justify-center items-center">
            <ViewListIcon />
          </Paper>
        </Link>
        <Link className="grow hover:scale-95" href={"form"}>
          <Paper className=" h-full flex justify-center items-center">
            <AddCircleIcon />
          </Paper>
        </Link>
      </nav>
      <div className="pl-[15%] w-full my-10 mx-auto">{children}</div>
    </main>
  );
}

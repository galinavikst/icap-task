"use client";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import { ITableRow, setAllRows } from "@/redux/features/tableSlice";
import { TableHead, TableRow, TableCell } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";

export default function TableHeadSorting() {
  const dispatch = useDispatch<AppDispatch>();

  const allProductArr = useAppSelector((state) => state.table.allRows);

  const sortProducts = (field: string, order: string) => {
    const sortedArr = [...allProductArr].sort((a, b) => {
      const aValue = a[field as keyof ITableRow];
      const bValue = b[field as keyof ITableRow];

      if (aValue != null && bValue != null) {
        if (typeof aValue === "string" && typeof bValue === "string") {
          const aValueLowerCase = aValue.toLowerCase();
          const bValueLowerCase = bValue.toLowerCase();

          if (order === "ab") {
            return aValueLowerCase > bValueLowerCase ? 1 : -1;
          } else {
            return aValueLowerCase > bValueLowerCase ? -1 : 1;
          }
        } else {
          if (order === "ab") {
            return Number(aValue) > Number(bValue) ? 1 : -1;
          } else {
            return Number(aValue) > Number(bValue) ? -1 : 1;
          }
        }
      }
      // for ts: Return 0 for cases where aValue or bValue is null or undefined
      return 0;
    });

    dispatch(setAllRows(sortedArr));
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <div className="flex">
            ID
            <NorthIcon
              className="w-5 hover:scale-110 hover:cursor-pointer"
              onClick={() => sortProducts("id", "ba")}
            />
            <SouthIcon
              className="w-5 hover:scale-110 hover:cursor-pointer"
              onClick={() => sortProducts("id", "ab")}
            />
          </div>
        </TableCell>
        <TableCell>
          <div className="flex">
            Name
            <NorthIcon
              className="w-5 hover:scale-110 hover:cursor-pointer"
              onClick={() => sortProducts("name", "ba")}
            />
            <SouthIcon
              className="w-5 hover:scale-110 hover:cursor-pointer"
              onClick={() => sortProducts("name", "ab")}
            />
          </div>
        </TableCell>
        <TableCell>
          Email
          <NorthIcon
            className="w-5 hover:scale-110 hover:cursor-pointer"
            onClick={() => sortProducts("email", "ba")}
          />
          <SouthIcon
            className="w-5 hover:scale-110 hover:cursor-pointer"
            onClick={() => sortProducts("email", "ab")}
          />
        </TableCell>
        <TableCell>
          <div className="flex whitespace-nowrap">Birthday date</div>
        </TableCell>
        <TableCell>Phone</TableCell>
        <TableCell>
          <div className="flex">
            Address
            <NorthIcon
              className="w-5 hover:scale-110 hover:cursor-pointer"
              onClick={() => sortProducts("address", "ba")}
            />
            <SouthIcon
              className="w-5 hover:scale-110 hover:cursor-pointer"
              onClick={() => sortProducts("address", "ab")}
            />
          </div>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

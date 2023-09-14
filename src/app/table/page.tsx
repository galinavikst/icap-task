"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import AppTittle from "@/components/AppTittle";
import { useGetAllProductsQuery } from "@/redux/features/apiSlice";
import Loader from "@/components/Loader";
import Image from "next/image";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import { ProductTableRow, setAllProducts } from "@/redux/features/tableSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";

export default function BasicTable() {
  const dispatch = useDispatch<AppDispatch>();
  const allProductArr = useAppSelector((state) => state.table.allProducts);
  const { data, isLoading } = useGetAllProductsQuery();

  React.useEffect(() => {
    if (data) {
      dispatch(setAllProducts(data.products));
    }
  }, [data, dispatch]);

  const sortProducts = (field: string, order: string) => {
    const sortedArr = [...allProductArr].sort((a, b) => {
      const aValue = a[field as keyof ProductTableRow];
      const bValue = b[field as keyof ProductTableRow];

      if (typeof aValue === "string" && typeof bValue === "string") {
        const aValueLowerCase = aValue.toLowerCase();
        const bValueLowerCase = bValue.toLowerCase();

        if (order === "ab") {
          return aValueLowerCase > bValueLowerCase
            ? 1
            : bValueLowerCase > aValueLowerCase
            ? -1
            : 0;
        } else {
          // For descending 'ba' order
          return aValueLowerCase > bValueLowerCase
            ? -1
            : bValueLowerCase > aValueLowerCase
            ? 1
            : 0;
        }
      } else {
        if (order === "ab") {
          return aValue > bValue ? 1 : bValue > aValue ? -1 : 0;
        } else {
          // For descending 'ba' order
          return aValue > bValue ? -1 : bValue > aValue ? 1 : 0;
        }
      }
    });
    dispatch(setAllProducts(sortedArr));
  };

  return isLoading ? (
    <Loader />
  ) : (
    <Container className="py-5">
      <AppTittle />
      <TableContainer component={Paper} className="my-5">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                    onClick={() => sortProducts("title", "ba")}
                  />
                  <SouthIcon
                    className="w-5 hover:scale-110 hover:cursor-pointer"
                    onClick={() => sortProducts("title", "ab")}
                  />
                </div>
              </TableCell>
              <TableCell>Description</TableCell>
              <TableCell>
                <div className="flex">
                  Price
                  <NorthIcon
                    className="w-5 hover:scale-110 hover:cursor-pointer"
                    onClick={() => sortProducts("price", "ba")}
                  />
                  <SouthIcon
                    className="w-5 hover:scale-110 hover:cursor-pointer"
                    onClick={() => sortProducts("price", "ab")}
                  />
                </div>
              </TableCell>
              <TableCell>Photo</TableCell>
              <TableCell>
                <div className="flex">
                  Rating
                  <NorthIcon
                    className="w-5 hover:scale-110 hover:cursor-pointer"
                    onClick={() => sortProducts("rating", "ba")}
                  />
                  <SouthIcon
                    className="w-5 hover:scale-110 hover:cursor-pointer"
                    onClick={() => sortProducts("rating", "ab")}
                  />
                </div>
              </TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>
                <div className="flex">
                  Category
                  <NorthIcon
                    className="w-5 hover:scale-110 hover:cursor-pointer"
                    onClick={() => sortProducts("category", "ba")}
                  />
                  <SouthIcon
                    className="w-5 hover:scale-110 hover:cursor-pointer"
                    onClick={() => sortProducts("category", "ab")}
                  />
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allProductArr.map((row: ProductTableRow) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.id}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell>
                  <Image
                    src={row.images[0]}
                    alt="product"
                    width={60}
                    height={50}
                  />
                </TableCell>
                <TableCell align="center">{row.rating}</TableCell>
                <TableCell align="center">{row.stock}</TableCell>
                <TableCell>{row.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

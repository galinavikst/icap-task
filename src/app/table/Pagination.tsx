"use client";
import { baseUrl, fetchData } from "@/redux/features/apiSlice";
import { ITableRow, setAllRows } from "@/redux/features/tableSlice";
import { AppDispatch } from "@/redux/store";
import { TablePagination } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

type Props = {
  count: number;
  next: string;
  previous: null | string;
  results: ITableRow[];
};

type PaginationProps = {
  data: Props;
};

export default function Pagination({ data }: PaginationProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [prevUrl, setPrevUrl] = React.useState<string | null>(null);
  const [nextUrl, setNextUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (data) {
      setNextUrl(data.next);
    }
  }, [data]);

  const handleChangePage = async (event: unknown, newPage: number) => {
    console.log(newPage, rowsPerPage);
    setPage(newPage);
  };

  const handlePagination = async (direction: string) => {
    let newUrl;

    if (direction === "prev" && prevUrl) {
      newUrl = prevUrl;
    } else if (direction === "next" && nextUrl) {
      newUrl = nextUrl;
    }

    if (newUrl) {
      const data = await fetchData(newUrl);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      dispatch(setAllRows(data.results));
      setPage((prevPage) =>
        direction === "prev" ? prevPage - 1 : prevPage + 1
      );
    }
  };

  const handleChangeRowsPerPage = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedValue = event.target.value;
    setRowsPerPage(parseInt(selectedValue, 10));
    const url = `${baseUrl}/table/?limit=${selectedValue}&offset=${selectedValue}`;

    const data = await fetchData(url);
    dispatch(setAllRows(data.results));
    setNextUrl(data.next);
    setPrevUrl(data.previous);

    setPage(0);
  };

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={data.count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      backIconButtonProps={{
        onClick: () => handlePagination("prev"),
        disabled: page === 0,
      }}
      nextIconButtonProps={{
        onClick: () => handlePagination("next"),
        disabled: page >= Math.ceil(data.count / rowsPerPage) - 1,
      }}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}

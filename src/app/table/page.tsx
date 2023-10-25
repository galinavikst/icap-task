"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container, TextField } from "@mui/material";
import AppTittle from "@/components/AppTittle";
import {
  useEditRowMutation,
  useGetAllRowsQuery,
} from "@/redux/features/apiSlice";
import Loader from "@/components/Loader";
import { ITableRow, setAllRows } from "@/redux/features/tableSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import Pagination from "@/app/table/Pagination";
import TableHeadSorting from "./TableHeadSorting";
import { convertDateFormat } from "../servise";

export default function BasicTable() {
  const dispatch = useDispatch<AppDispatch>();
  const [editMode, setEditMode] = React.useState<number | null>(null);
  const [errorData, setErrorData] = React.useState({
    errorText: "",
    errorName: "",
  });
  const { errorText, errorName } = errorData;
  const [rowData, setRowData] = React.useState<ITableRow>({
    id: null,
    name: "",
    email: "",
    birthday_date: "",
    phone_number: "",
    address: "",
  });

  const [updatedData, setUpdatedData] = React.useState<ITableRow | null>(null);

  const { id, name, email, birthday_date, phone_number, address } = rowData;

  const allProductArr = useAppSelector((state) => state.table.allRows);
  const limit = useAppSelector((state) => state.table.limit);

  const { data, isLoading, refetch } = useGetAllRowsQuery(limit);
  const [updateRow] = useEditRowMutation();

  React.useEffect(() => {
    if (data) {
      dispatch(setAllRows(data.results));
    }
  }, [data, dispatch]);

  const handleEdit = (row: ITableRow) => {
    setEditMode(row.id);

    setRowData({
      id: row.id,
      name: row.name,
      email: row.email,
      birthday_date: convertDateFormat(row.birthday_date),
      phone_number: row.phone_number,
      address: row.address,
    });

    setUpdatedData(rowData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // e.stopPropagation();
    console.log(updatedData);
    e.preventDefault();

    try {
      const response = await updateRow(updatedData).unwrap();

      refetch();
      setEditMode(null);
    } catch (error: any) {
      for (const field in error.data) {
        if (Array.isArray(error.data[field]) && error.data[field].length > 0) {
          setErrorData({
            errorName: field,
            errorText: error.data[field][0],
          });
          break; // Stop on the first error found
        }
      }
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Check if the input is a date and if it's in the past
    if (name === "birthday_date") {
      const inputDate = new Date(value);
      const currentDate = new Date();

      if (inputDate > currentDate) {
        // The date is in the future
        setErrorData({
          errorName: "date",
          errorText: "Invalid data",
        });
        return;
      }
    }

    setRowData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return isLoading ? (
    <Loader />
  ) : (
    <Container className="py-5">
      <AppTittle />
      <form onSubmit={handleSubmit}>
        <TableContainer component={Paper} className="my-5">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHeadSorting />
            <TableBody>
              {allProductArr.map((row: ITableRow) => (
                <TableRow
                  onClick={(e) => handleEdit(row)}
                  key={row.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    cursor: "pointer",
                  }}
                >
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell>
                    {editMode === row.id ? (
                      <TextField
                        onChange={handleInputChange}
                        variant="standard"
                        name="name"
                        value={name}
                        inputProps={{
                          maxLength: 225,
                          minLength: 1,
                        }}
                        helperText={errorName === "name" ? errorText : ""}
                        required
                      />
                    ) : (
                      row.name
                    )}
                  </TableCell>
                  <TableCell>
                    {editMode === row.id ? (
                      <TextField
                        onChange={handleInputChange}
                        variant="standard"
                        name="email"
                        type="email"
                        inputProps={{
                          maxLength: 254,
                          minLength: 1,
                          type: "email",
                        }}
                        value={email}
                        helperText={errorName === "email" ? errorText : ""}
                        required
                      />
                    ) : (
                      row.email
                    )}
                  </TableCell>
                  <TableCell align="center">
                    {editMode === row.id ? (
                      <TextField
                        onChange={handleInputChange}
                        variant="standard"
                        value={birthday_date}
                        name="birthday_date"
                        type="date"
                        helperText={errorName === "date" ? errorText : ""}
                      />
                    ) : (
                      row.birthday_date
                    )}
                  </TableCell>
                  <TableCell>
                    {editMode === row.id ? (
                      <TextField
                        onChange={handleInputChange}
                        variant="standard"
                        value={phone_number}
                        name="phone_number"
                        helperText={
                          errorName === "phone_number" ? errorText : ""
                        }
                        inputProps={{
                          maxLength: 20,
                          minLength: 1,
                        }}
                      />
                    ) : (
                      row.phone_number
                    )}
                  </TableCell>
                  <TableCell>
                    {editMode === row.id ? (
                      <TextField
                        onChange={handleInputChange}
                        variant="standard"
                        value={address}
                        name="address"
                        helperText={errorName === "address" ? errorText : ""}
                        inputProps={{
                          minLength: 1,
                        }}
                      />
                    ) : (
                      row.address
                    )}
                  </TableCell>
                  {editMode === row.id && (
                    <TableCell>
                      <Button variant="text" type="submit">
                        Submit
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </form>
      {data && <Pagination data={data} />}
    </Container>
  );
}

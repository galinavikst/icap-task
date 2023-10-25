import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITableRow } from "./tableSlice";

// type BodyData = {
//   username: string;
//   password: string;
// };

// type DataMessaga = {
//   message: string;
// };

// type ErrorMessaga = {
//   error: string;
// };

// interface LoginResponse {
//   data: Error | Data;
// }

// interface Error {
//   data: ErrorMessaga;
//   status: number;
//   //error: FetchBaseQueryError | SerializedError;
// }

// interface Data {
//   data: DataMessaga;
//   status?: number;
// }

export interface IResponse {
  count: number;
  next: string;
  previous: string;
  results: ITableRow[];
}

export const baseUrl = "https://technical-task-api.icapgroupgmbh.com/api";
export const icapApi = createApi({
  reducerPath: "icapApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    addRow: builder.mutation<ITableRow, Omit<ITableRow, "id">>({
      query: (body) => ({
        url: `/table/`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body,
      }),
    }),

    login: builder.mutation<any, any>({
      query: (bodyData) => ({
        url: "/login/",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: bodyData,
      }),
    }),

    editRow: builder.mutation({
      query: (row) => ({
        url: `/table/${row.id}/`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: row,
      }),
    }),

    getAllRows: builder.query<IResponse, void>({
      query: () => `/table/`,
    }),
  }),
});

export const fetchData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const {
  useAddRowMutation,
  useGetAllRowsQuery,
  useLoginMutation,
  useEditRowMutation,
} = icapApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AddedBook } from "./addBookSlice";

export const productApi = createApi({
  reducerPath: "catApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    getProductByQuery: builder.query<any, string>({
      query: (query) => `/products/search?q=${query}`,
    }),
    addProduct: builder.mutation<AddedBook, Omit<AddedBook, "id">>({
      query: (body) => ({
        url: `/products/add`,
        method: "POST",
        body,
      }),
    }),

    getAllProducts: builder.query<any, void>({
      query: () => `/products`,
    }),
  }),
});

export const {
  useGetProductByQueryQuery,
  useAddProductMutation,
  useGetAllProductsQuery,
} = productApi;

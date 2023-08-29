import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SerchCatResponse } from "./searchSlice";

export const apiKey =
  "live_pMhx8NbFTc6yNWUvy8InHnvWUzlTRGJQEeKY1YP1NljwqgR488Kl9B0ghXvgVaK0";

// Define a service using a base URL and expected endpoints
export const catApi = createApi({
  reducerPath: "catApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thecatapi.com/v1/",
  }),
  tagTypes: ["RandomCat"],
  endpoints: (builder) => ({
    getCatById: builder.query<null, string>({
      query: (id) => `images/${id}`,
    }),
    getRandomCat: builder.query<SerchCatResponse[], void>({
      query: () => `images/search`,
      providesTags: ["RandomCat"], //a tag to identify the query
    }),
    getCatByBreedsName: builder.query<SerchCatResponse[], string>({
      query: (name) =>
        `images/search?limit=20&breed_ids=${name}&api_key=${apiKey}`,
    }),
    getAllBreeds: builder.query<any, void>({
      query: () => `breeds`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCatByIdQuery,
  useGetRandomCatQuery,
  useGetCatByBreedsNameQuery,
  useGetAllBreedsQuery,
} = catApi;

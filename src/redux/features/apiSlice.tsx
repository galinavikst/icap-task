import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RandomCatResponse } from "./votingSlice";
import { SerchCatResponse } from "./searchSlice";

const apiKey =
  "live_pMhx8NbFTc6yNWUvy8InHnvWUzlTRGJQEeKY1YP1NljwqgR488Kl9B0ghXvgVaK0";

// Define a service using a base URL and expected endpoints
export const catApi = createApi({
  reducerPath: "catApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thecatapi.com/v1/images/",
  }),
  tagTypes: ["RandomCat"],
  endpoints: (builder) => ({
    getCatById: builder.query<null, string>({
      query: (id) => `${id}`,
    }),
    getRandomCat: builder.query<RandomCatResponse[], void>({
      query: () => `search`,
      providesTags: ["RandomCat"], //a tag to identify the query
    }),
    getCatByBreedsName: builder.query<SerchCatResponse[], string>({
      query: (name) => `search?limit=20&breed_ids=${name}&api_key=${apiKey}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCatByIdQuery,
  useGetRandomCatQuery,
  useGetCatByBreedsNameQuery,
} = catApi;

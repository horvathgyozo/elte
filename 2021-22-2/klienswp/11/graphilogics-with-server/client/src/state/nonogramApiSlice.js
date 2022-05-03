import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:3030/";

export const nonogramApiSlice = createApi({
  reducerPath: "nonogramApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPuzzles: builder.query({
      query: () => ({
        url: "puzzles",
      }),
      transformResponse: (response) => response.data,
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "authentication",
        method: "POST",
        body,
      }),
    }),
  }),
});

// reducer
export const nonogramApiSliceReducer = nonogramApiSlice.reducer;
// hooks
export const { useGetPuzzlesQuery, useLoginMutation } = nonogramApiSlice;

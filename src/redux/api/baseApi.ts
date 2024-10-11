import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL + '/api'

  //   credentials: "include",
  //   prepareHeaders: (headers, { getState }) => {
  //     const token = (getState() as RootState)?.auth?.token;

  //     if (token) {
  //       headers.set("Authorization", `Bearer ${token}`);
  // }
  // return {
  //  ...headers,
  //   Authorization: `Bearer ${token}`,
  // };
  // return headers;
  //   },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["products", "orders", "users", "reviews"],
  endpoints: () => ({}),
});

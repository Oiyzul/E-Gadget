import { baseApi } from "@/redux/api/baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: (data) => {
        console.log("data", data);
        return {
          url: "/reviews/add-review",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["reviews"],
    }),
    getAllReviews: builder.query({
      query: (id: string) => ({
        url: `/reviews/${id}`,
        method: "GET",
      }),
      providesTags: ["reviews"],
    }),
  }),
});

export const { useAddReviewMutation, useGetAllReviewsQuery } = reviewApi;

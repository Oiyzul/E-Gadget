import { baseApi } from "@/redux/api/baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    pay: builder.mutation({
      query: (data) => {
        return {
          url: `/payment`,
          method: "POST",
          body: { data },
        };
      },
      invalidatesTags: ["orders"],
    }),
  }),
});

export const {
  usePayMutation
} = paymentApi;

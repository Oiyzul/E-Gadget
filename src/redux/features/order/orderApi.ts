import { baseApi } from "@/redux/api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (data) => {
        return {
          url: "/orders",
          method: "POST",
          body: data,
        };
      },
    }),
    getAllOrders: builder.query({
      query: () => ({
        url: "/orders",
      }),
      providesTags: ["orders"],
    }),

    getSingleOrder: builder.query({
      query: (id: string) => ({
        //change it my bookings
        url: `/orders/${id}`,
      }),
    }),

    updateOrder: builder.mutation({
      query: ({ id, data }) => ({
        url: `/orders/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["orders"],
    }),
  }),
});

export const {
  usePlaceOrderMutation,
  useGetAllOrdersQuery,
  useGetSingleOrderQuery,
  useUpdateOrderMutation,
} = orderApi;

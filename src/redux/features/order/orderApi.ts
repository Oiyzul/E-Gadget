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
      providesTags: ["orders"],
    }),
    getOrdersByUserId: builder.query({
      query: () => ({
        url: "/orders/mine",
      }),
      providesTags: ["orders"],
    }),
    updateOrder: builder.mutation({
      query: ({ id, data }) => ({
        url: `/orders?id=${id}`,
        method: "PUT",
        body: data ,
      }),
      invalidatesTags: ["orders"],
    }),

    cancelOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["orders"],
    }),

    payOrder: builder.mutation({
      query: (data) => {
        return {
          url: `/orders/${data.order}/pay`,
          method: "POST",
          body: { data },
        };
      },
      invalidatesTags: ["orders"],
    }),
  }),
});

export const {
  usePlaceOrderMutation,
  useGetAllOrdersQuery,
  useGetSingleOrderQuery,
  useGetOrdersByUserIdQuery,
  useUpdateOrderMutation,
  usePayOrderMutation,
  useCancelOrderMutation,
} = orderApi;

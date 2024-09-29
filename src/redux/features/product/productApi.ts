import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/products",
      }),
      providesTags: ["products"],
    }),
    getProductById: builder.query({
      query: (id: string) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["products"],
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/products",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        method: "PUT",
        url: `/products?id=${id}`,
        body: { data },
      }),
      invalidatesTags: ["products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/products?id=${id}`,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;

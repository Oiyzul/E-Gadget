import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateUser: builder.mutation({
      query: (data) => {
        return {
          url: `/auth/profile`,
          method: "PUT",
          body: { data },
        };
      },
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/auth/users",
      }),
      providesTags: ["users"],
    }),
  }),
});

export const { useUpdateUserMutation, useGetAllUsersQuery } = userApi;

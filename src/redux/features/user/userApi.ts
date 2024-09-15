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
      }
    }),
  }),
});

export const { useUpdateUserMutation } = userApi;

import { baseApi } from '@/redux/Api/baseApi';

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allUsers: builder.query({
      query: () => ({
        url: '/admin/users',
        method: 'GET',
      }),
      providesTags: ['allUser'],
    }),
    deactiveUsers: builder.mutation({
      query: (id) => ({
        url: `/admin/users/${id}/block`,
        method: 'PATCH',
      }),
      invalidatesTags: ['allUser'],
    }),
  }),
});
export const { useAllUsersQuery, useDeactiveUsersMutation } = userApi;

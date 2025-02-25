import { baseApi } from '../../Api/baseApi';

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userAllOrders: builder.query({
      query: () => ({
        url: `/orders/userAllOrders`,
        method: 'GET',
      }),
      providesTags: ['order'],
    }),
    adminAllOrders: builder.query({
      query: () => ({
        url: `/orders/adminAllOrders`,
        method: 'GET',
      }),
      providesTags: ['order'],
    }),
    createOrder: builder.mutation({
      query: (data) => ({
        url: '/orders',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['order'],
    }),

    getOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/verify?order_id=${id}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['order', 'product'],
    }),
  }),
});
export const {
  useCreateOrderMutation,
  useAdminAllOrdersQuery,
  useUserAllOrdersQuery,
  useGetOrderMutation,
} = orderApi;

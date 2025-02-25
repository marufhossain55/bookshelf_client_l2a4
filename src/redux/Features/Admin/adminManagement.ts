import { baseApi } from '@/Redux/Api/baseApi';
import { IBikeResponse, TResponseRedux } from '@/types';

const productManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (
        params: {
          searchTerm?: string;
          category?: string;
          inStock?: string;
          minPrice?: number;
          maxPrice?: number;
          limit?: number;
          page?: number;
        } = {}
      ) => {
        const queryParams = new URLSearchParams();

        if (params.searchTerm)
          queryParams.append('searchTerm', params.searchTerm);
        if (params.category) queryParams.append('category', params.category);
        if (params.inStock) queryParams.append('inStock', params.inStock);
        if (params.minPrice)
          queryParams.append('minPrice', params.minPrice.toString());
        if (params.maxPrice)
          queryParams.append('maxPrice', params.maxPrice.toString());
        if (params.limit) queryParams.append('limit', params.limit.toString());
        if (params.page) queryParams.append('page', params.page.toString());
        console.log(queryParams, params, 'queryParams');
        return {
          url: `/products?${queryParams.toString()}`,
          method: 'GET',
        };
      },
      transformResponse: (response: TResponseRedux<IBikeResponse[]>) => ({
        data: response?.data,
        meta: response?.meta,
      }),
      providesTags: ['product'],
    }),
    singleProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'GET',
      }),
      providesTags: ['product'],
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: '/products',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['product'],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['product'],
    }),
    updateProduct: builder.mutation({
      query: ({ data, id }) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['product'],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useSingleProductQuery,
} = productManagementApi;

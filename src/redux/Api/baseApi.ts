/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { toast } from 'sonner';
import { RootState } from '../store';
import { logout, setUser } from '../Features/Auth/AuthSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_REACT_APP_SERVER_URI}/api`,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('authorization', `${token}`);
    }
    return headers;
  },
});
const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 404) {
    toast.error(
      (result?.error?.data as { message: string })?.message as string
    );
  }

  if (result?.error?.status === 401) {
    const res = await fetch(
      `${import.meta.env.VITE_REACT_APP_SERVER_URI}/api/auth/refresh-token`,
      {
        method: 'POST',
        credentials: 'include',
      }
    );
    const data = await res.json();

    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;
      api.dispatch(
        setUser({
          user,
          token: data.accessToken,
        })
      );
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: [
    'product',
    'allUser',
    'updateUserPass',
    'order',
    'revenue',
    'user',
  ],
  endpoints: () => ({}),
});

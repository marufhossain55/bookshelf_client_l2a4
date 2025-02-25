import { BaseQueryApi } from '@reduxjs/toolkit/query';

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export interface IBookResponse {
  _id: string;
  title: string;
  author: string;
  image?: string;
  price: number;
  category: 'Fiction' | 'Mystery' | 'Fantasy' | 'History' | 'Horror';
  description: string;
  quantity: number;
  inStock?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};

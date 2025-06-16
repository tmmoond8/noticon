import { Noticon } from '../types';
import httpClient from './config';

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface ListResponse<T> {
  items: Array<T>;
  pagination: Pagination;
}

export const getSamplePlace = () => {
  return httpClient.get<ListResponse<Noticon>>('/noticons');
};

export const getPlaceListAll = () => {
  return httpClient.get<ListResponse<Noticon>>(
    `/noticons?pagination[pageSize]=10000&pagination[page]=1`,
  );
};

export const createNoticon = (noticon: Noticon) => {
  return httpClient.post<Noticon>(
    '/noticons',
    {
      data: noticon,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_INNER_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    },
  );
};

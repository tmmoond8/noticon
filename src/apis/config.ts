import axios from 'axios';
import { normalizeMap } from './utils';

export const localHttpClient = axios.create({
  baseURL: '/',
});

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use(async (config) => {
  // 유저의 세션을 세팅 해도 좋다.
  return config;
});

httpClient.interceptors.response.use(
  (response) => {
    if (
      response.status === 200 &&
      Array.isArray(response.data?.data) &&
      response.data?.meta
    ) {
      const result = {
        ...response,
        data: {
          items: response.data.data.map(normalizeMap),
          pagination: response.data.meta.pagination,
        },
      };
      return result;
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default httpClient;

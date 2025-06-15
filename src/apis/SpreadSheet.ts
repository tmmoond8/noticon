import axios, { AxiosResponse } from 'axios';
import { Noticon } from '../types';

export default {
  get: async (): Promise<AxiosResponse<{ data: Noticon[] }>> =>
    await axios.get(
      `${process.env.REACT_APP_GOOGLE_SHEET_URL}?sheetName=${process.env.REACT_APP_SHEET_NAME}`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        withCredentials: false,
      },
    ),
  append: async (noticon: {
    id: string;
    imgUrl: string;
    title: 'title';
    keywords: string;
  }) =>
    await axios.get(
      `${process.env.REACT_APP_GOOGLE_SHEET_URL}?sheetName=${process.env.REACT_APP_SHEET_NAME}`,
      {
        params: noticon,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        withCredentials: false,
      },
    ),
};

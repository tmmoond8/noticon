import axios, { AxiosResponse } from 'axios';
import { getPlaceListAll } from '.././apis/noticon';
import { Noticon } from '../types';
import { unwrapStrapiData } from './utils';

export default {
  get: async (): Promise<Noticon[]> => {
    const { data } = await getPlaceListAll();
    const noticons = unwrapStrapiData<Noticon[]>(data.items);
    return noticons ?? [];
  },
  append: async (noticon: {
    id: string;
    imgUrl: string;
    title: 'title';
    keywords: string;
  }) =>
    await axios.get(
      `${process.env.REACT_APP_GOOGLE_SHEET_URL}?sheetName=${process.env.REACT_APP_SHEET_NAME}`,
      { params: noticon },
    ),
};

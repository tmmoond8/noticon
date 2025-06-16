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
  append: async (noticon: Noticon) =>
    await axios.post(`/api/create-noticon`, noticon, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_INNER_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }),
};

import axios from 'axios';
import { Noticon } from '../types';

export const get = async (sheet: 'logo' | 'normal') => {
  const result = await axios.get(`${process.env.REACT_APP_GOOGLE_SHEET_URL}?sheetName=${sheet}`);
  const data = result.data.data;
  return data;
}

export const upload = async (sheet: 'logo' | 'normal', noticon: Noticon) => {
  // await axios.post(`${process.env.REACT_APP_GOOGLE_SHEET_URL}?sheetName=${sheet}`, 
  await axios.get(`${process.env.REACT_APP_GOOGLE_SHEET_URL}?sheetName=${sheet}`, { params: noticon });
}
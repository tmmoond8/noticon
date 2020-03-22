import axios from 'axios';
import { Noticon } from '../types';
const {
  REACT_APP_SHEET_NAME: sheetName
} = process.env;

export const get = async (sheet: 'logo' | 'normal') => {
  const result = await axios.get(`${process.env.REACT_APP_GOOGLE_SHEET_URL}?sheetName=${sheetName || 'noticon'}`);
  const data = result.data.data;
  return data;
}

export const append = async (sheet: 'logo' | 'normal', noticon: Noticon) => 
  await axios.get(`${process.env.REACT_APP_GOOGLE_SHEET_URL}?sheetName=${sheetName || 'noticon'}`, { params: noticon });
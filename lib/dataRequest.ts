import axios from 'axios';

export const get = async (sheet: 'logo' | 'normal') => {
  const result = await axios.get(`${process.env.REACT_APP_GOOGLE_SHEET_URL}?sheetName=${sheet}`);
  const data = result.data.data;
  return data;
}
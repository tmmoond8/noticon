import axios from 'axios';

export const get = async (sheet: 'logo' | 'normal') => {
  const result = await axios.get(`${process.env.REACT_APP_GOOGLE_SHEET_URL}?sheetName=${sheet}`);
  const data = result.data.data;
  return data;
}

export const post = async (sheet: 'logo' | 'normal') => {
  const result = await axios.post(`${process.env.REACT_APP_GOOGLE_SHEET_URL}?sheetName=${sheet}`, 
  { data: 'abd' }, { headers: { 'Content-Type': 'application/json'} })
  console.log(result);
}
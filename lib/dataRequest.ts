import axios from 'axios';
import { Noticon } from '../types';

export const get = async (sheet: 'logo' | 'normal') => {
  const result = await axios.get(`${process.env.REACT_APP_GOOGLE_SHEET_URL}?sheetName=${sheet}`);
  const data = result.data.data;
  return data;
}

export const post = async (sheet: 'logo' | 'normal', noticon: Noticon) => {
  // await axios.post(`${process.env.REACT_APP_GOOGLE_SHEET_URL}?sheetName=${sheet}`, 
  await axios.post(`https://script.google.com/macros/s/AKfycbw6zKYeWddESrtPTNZP-fjGUF_uWpMyeIVR7zkT16_IlNkMqYo/exec?sheetName=logo&title=test&imgUrl=https://res.cloudinary.com/dgggcrkxq/image/upload/v1565787727/dino_irt34g.png&keywords=bbb,aaa&id=ldskssds`, 
    noticon,
    { 
      headers: { 
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
      }
    });
}
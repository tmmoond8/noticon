import axios, { AxiosResponse } from 'axios';
import { Noticon } from '../types';
import { uploadError } from './errorMessages';

export const get = async (): Promise<AxiosResponse<{ data: Noticon[] }>> => {
  return await axios.get(
    `${process.env.REACT_APP_GOOGLE_SHEET_URL}?sheetName=${process.env.REACT_APP_SHEET_NAME}`,
  );
};

export const append = async (noticon: Noticon) =>
  await axios.get(
    `${process.env.REACT_APP_GOOGLE_SHEET_URL}?sheetName=${process.env.REACT_APP_SHEET_NAME}`,
    { params: noticon },
  );

interface UploadOption {
  temp?: boolean;
}

export const upload = async (
  file: File | string,
  preset?: UploadOption,
): Promise<{ id: string; imgUrl: string }> => {
  let form = new FormData();
  form.append('file', file);
  form.append('api_key', process.env.REACT_APP_CLOUDINARY_API_KEY || '');
  form.append(
    'upload_preset',
    preset?.temp
      ? 'temp_preset'
      : process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET || '',
  );

  try {
    const { data } = await axios.post(
      process.env.REACT_APP_CLOUDINARY_UPLOAD_URL || '',
      form,
    );
    return {
      id: data.public_id,
      imgUrl: data.secure_url,
    };
  } catch (error) {
    throw new Error(uploadError);
  }
};

import axios, { AxiosResponse } from 'axios';

const Upload2Cloudinary = async (
  file: File | string,
  preset?: string,
): Promise<{ id: string; imgUrl: string; format: string }> => {
  let form = new FormData();
  form.append('file', file);
  form.append('api_key', process.env.REACT_APP_CLOUDINARY_API_KEY || '');
  form.append(
    'upload_preset',
    preset || process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET || '',
  );

  try {
    const { data } = await axios.post(
      process.env.REACT_APP_CLOUDINARY_UPLOAD_URL || '',
      form,
    );
    return {
      id: data.public_id,
      imgUrl: data.secure_url,
      format: data.format,
    };
  } catch (error) {
    throw new Error('UPLOAD ERROR');
  }
};

export default {
  upload: Upload2Cloudinary,
  uploadTemp: async (
    file: File | string,
  ): Promise<{ id: string; imgUrl: string; format: string }> => {
    return await Upload2Cloudinary(file, 'temp_preset');
  },
};

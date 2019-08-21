import axios from 'axios';

export const upload = async (file: File) =>  {
  let form = new FormData();
  form.append('file', file);
  form.append('api_key', process.env.REACT_APP_CLOUDINARY_API_KEY || "")
  form.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET || "");

  const { data } = await axios.post(process.env.REACT_APP_CLOUDINARY_UPLOAD_URL || "", form);
  return {
    id: data.public_id,
    imgUrl: data.secure_url
  };
}
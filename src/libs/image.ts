import { imgSrcToBlob } from 'blob-util';
import { ACCEPT_FORMATS, ImageForamt } from '../components/UploadIcon/constant';
import { uploadTemp } from '../apis';

export const imgSrc2Blob = (
  imgSrc: string,
  imageFormat: string,
): Promise<Blob> => {
  return imgSrcToBlob(imgSrc, imageFormat, 'Anonymous', 100);
};

export const getImageFormat = async (imgSrc: string): Promise<string> => {
  const filename = (imgSrc.split('/').pop() as string).split('?')[0];
  const extension = `image/${filename.split('.').pop() || ''}` as ImageForamt;
  if (Object.values(ACCEPT_FORMATS).includes(extension)) {
    return extension;
  }
  const { format } = await uploadTemp(imgSrc);
  return `image/${format}` as ImageForamt;
};

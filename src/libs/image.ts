import { imgSrcToDataURL } from 'blob-util';
import { ACCEPT_FORMATS } from '../components/UploadIcon/constant';
import { ImageForamt, CropPosition, ImageBlob } from '../types';

export const imgSrc2DataURL = (
  imgSrc: string,
  imageFormat: string,
): Promise<string> => {
  return imgSrcToDataURL(imgSrc, imageFormat, 'Anonymous', 100);
};

export const getImageFormatByName = async (
  imgSrc: string,
): Promise<string | null> => {
  const filename = (imgSrc.split('/').pop() as string).split('?')[0];
  const extension = `image/${filename.split('.').pop() || ''}` as ImageForamt;
  if (Object.values(ACCEPT_FORMATS).includes(extension)) {
    return extension;
  }
  return null;
};

export const readImageBlob = (
  blob: Blob,
  onLoad: (data: string) => void,
  onError: (error: unknown) => void,
) => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = () => onLoad(reader!.result!.toString());
  reader.onerror = onError;
};

export const cropImage = (
  image: CanvasImageSource,
  crop: CropPosition,
  fileName: string,
) => {
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  const { x, y, height, width } = crop;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx!.drawImage(image, x, y, width, height, 0, 0, width, height);
  return canvas.toDataURL();
};

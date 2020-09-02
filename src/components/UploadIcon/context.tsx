import React from 'react';
import { STEPS } from './constant';
import { GifAlign } from '../../types';
import { Noticon } from '../../types';

const UploadIconContext = React.createContext<{
  step: keyof typeof STEPS;
  setStep: (step: keyof typeof STEPS) => void;
  preloadImgSrc: string;
  setPreloadImgSrc: (url: string) => void;
  croppedImg: File | null;
  setCroppedImg: (file: File) => void;
  croppedImgUrl: string;
  setCroppedImgUrl: (url: string) => void;
  imageFormat: string | null;
  setImageFormat: (imageForamt: string | null) => void;
  gifAlign: GifAlign | null;
  setGifAlign: (align: GifAlign) => void;
  loading: boolean;
  setLoading: (bool: boolean) => void;
  closeModal: () => void;
  unshightIcon: (icon: Noticon) => void;
}>({
  step: STEPS.EDIT_METADATA,
  setStep: (step: keyof typeof STEPS) => {},
  preloadImgSrc:
    'https://res.cloudinary.com/dhfi7dxpu/image/upload/v1599056178/noticon/lpnyvzxn3isceox89fct.png',
  setPreloadImgSrc: (url: string) => {},
  croppedImg: null,
  setCroppedImg: (file: File) => {},
  croppedImgUrl:
    'https://res.cloudinary.com/dhfi7dxpu/image/upload/v1599056178/noticon/lpnyvzxn3isceox89fct.png',
  setCroppedImgUrl: (url: string) => {},
  imageFormat: 'image/png',
  setImageFormat: (imageForamt: string | null) => {},
  gifAlign: null,
  setGifAlign: (align: GifAlign) => {},
  loading: false,
  setLoading: (bool: boolean) => {},
  closeModal: () => {},
  unshightIcon: (icon: Noticon) => {},
});

UploadIconContext.displayName = 'UploadIconContext';

export const useUploadIconContext = () => {
  return React.useContext(UploadIconContext);
};

export default UploadIconContext;

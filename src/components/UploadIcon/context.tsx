import React from 'react';
import { STEPS } from './constant';

const UploadIconContext = React.createContext<{
  step: keyof typeof STEPS;
  setStep: (step: keyof typeof STEPS) => void;
  hiddenImgEl: HTMLImageElement | null;
  setHiddenImgEl: (imgElement: HTMLImageElement) => void;
  cloudinaryTempUrl: string | null;
  setCloudinaryTempUrl: (url: string) => void;
  imgSrc: string;
  setImgSrc: (imgSrc: string) => void;
  croppedImg: any;
  setCroppedImg: (cropped: any) => void;
}>({
  step: STEPS.chooseSource,
  setStep: (step: keyof typeof STEPS) => {},
  hiddenImgEl: null,
  setHiddenImgEl: (imgElement: HTMLImageElement) => {},
  cloudinaryTempUrl: null,
  setCloudinaryTempUrl: (url: string) => {},
  imgSrc:
    'https://pelicana.co.kr/resources/images/menu/original_menu01_200529.png',
  setImgSrc: (imgSrc: string) => {},
  croppedImg: null,
  setCroppedImg: (cropped: any) => {},
});

UploadIconContext.displayName = 'UploadIconContext';

export const useUploadIconContext = () => {
  return React.useContext(UploadIconContext);
};

export default UploadIconContext;

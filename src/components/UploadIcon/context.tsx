import React from 'react';
import { STEPS } from './constant';
import { GifAlign } from '../../types';
import { Noticon } from '../../types';

const UploadIconContext = React.createContext<{
  step: keyof typeof STEPS;
  setStep: (step: keyof typeof STEPS) => void;
  safeImgSrc: string;
  setSafeImgSrc: (url: string) => void;
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
  errorMessage: string | null;
  setErrorMessage: (message: string | null) => void;
}>({
  step: STEPS.CHOOSE_SOURCE,
  setStep: (step: keyof typeof STEPS) => {},
  safeImgSrc: '',
  setSafeImgSrc: (url: string) => {},
  croppedImg: null,
  setCroppedImg: (file: File) => {},
  croppedImgUrl: '',
  setCroppedImgUrl: (url: string) => {},
  imageFormat: null,
  setImageFormat: (imageForamt: string | null) => {},
  gifAlign: null,
  setGifAlign: (align: GifAlign) => {},
  loading: false,
  setLoading: (bool: boolean) => {},
  closeModal: () => {},
  unshightIcon: (icon: Noticon) => {},
  errorMessage: null,
  setErrorMessage: (message: string | null) => {},
});

UploadIconContext.displayName = 'UploadIconContext';

export const useUploadIconContext = () => {
  return React.useContext(UploadIconContext);
};

export default UploadIconContext;

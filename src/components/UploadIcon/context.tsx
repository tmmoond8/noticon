import React from 'react';
import { STEPS } from './constant';
import { Noticon } from '../../types';

const UploadIconContext = React.createContext<{
  step: keyof typeof STEPS;
  setStep: (step: keyof typeof STEPS) => void;
  cloudinaryTempUrl: string;
  setCloudinaryTempUrl: (url: string) => void;
  croppedImg: File | null;
  setCroppedImg: (file: File) => void;
  croppedImgUrl: string;
  setCroppedImgUrl: (url: string) => void;
  loading: boolean;
  setLoading: (bool: boolean) => void;
  closeModal: () => void;
  unshightIcon: (icon: Noticon) => void;
}>({
  step: STEPS.chooseSource,
  setStep: (step: keyof typeof STEPS) => {},
  cloudinaryTempUrl: '',
  setCloudinaryTempUrl: (url: string) => {},
  croppedImg: null,
  setCroppedImg: (file: File) => {},
  croppedImgUrl: '',
  setCroppedImgUrl: (url: string) => {},
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

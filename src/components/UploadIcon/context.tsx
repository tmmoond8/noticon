import React from 'react';
import { STEPS } from './constant';

const UploadIconContext = React.createContext<{
  step: keyof typeof STEPS;
  setStep: (step: keyof typeof STEPS) => void;
  cloudinaryTempUrl: string;
  setCloudinaryTempUrl: (url: string) => void;
  loading: boolean;
  setLoading: (bool: boolean) => void;
}>({
  step: STEPS.chooseSource,
  setStep: (step: keyof typeof STEPS) => {},
  cloudinaryTempUrl:
    'https://res.cloudinary.com/dgggcrkxq/image/upload/v1598684433/temp/nawb5y7jgkgzeoeyxijl.png',
  setCloudinaryTempUrl: (url: string) => {},
  loading: false,
  setLoading: (bool: boolean) => {},
});

UploadIconContext.displayName = 'UploadIconContext';

export const useUploadIconContext = () => {
  return React.useContext(UploadIconContext);
};

export default UploadIconContext;

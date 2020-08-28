import React from 'react';
import { STEPS } from './constant';

const UploadIconContext = React.createContext<{
  step: keyof typeof STEPS;
  imgSrc: string;
  setStep: (step: keyof typeof STEPS) => void;
  setImgSrc: (imgSrc: string) => void;
}>({
  step: STEPS.chooseSource,
  imgSrc: '',
  setStep: (step: keyof typeof STEPS) => {},
  setImgSrc: (imgSrc: string) => {},
});

UploadIconContext.displayName = 'UploadIconContext';

export const UploadIconProvder = (props: {
  children: React.ReactNode;
}): JSX.Element => {
  const { children } = props;
  const context = React.useContext(UploadIconContext);
  const [imgSrc, setImgSrc] = React.useState(context.imgSrc);
  const [step, setStep] = React.useState(context.step);

  return (
    <UploadIconContext.Provider
      value={{
        step,
        imgSrc,
        setImgSrc,
        setStep,
      }}
    >
      {children}
    </UploadIconContext.Provider>
  );
};

export const useUploadIconContext = () => {
  return React.useContext(UploadIconContext);
};

export default UploadIconContext;

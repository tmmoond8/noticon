/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import UploadIconContext, { useUploadIconContext } from './context';
import { STEPS } from './constant';
import ChooseSource from './ChooseSource';
import ImageCrop from './ImageCrop';

export default function UploadIcon(): JSX.Element {
  const context = useUploadIconContext();
  const [imgSrc, setImgSrc] = React.useState(context.imgSrc);
  const [step, setStep] = React.useState(context.step);
  const [croppedImg, setCroppedImg] = React.useState(context.croppedImg);
  const [croppedImgUrl, setCroppedImgUrl] = React.useState(context.croppedImg);
  const [hiddenImgEl, setHiddenImgEl] = React.useState(context.hiddenImgEl);
  const [cloudinaryTempUrl, setCloudinaryTempUrl] = React.useState(
    context.cloudinaryTempUrl,
  );

  React.useEffect(() => {
    if (croppedImg !== null) {
      const reader = new FileReader();
      reader.readAsDataURL(croppedImg);
      reader.onload = () => {
        setCroppedImgUrl(reader!.result!.toString());
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
  }, [croppedImg]);
  return (
    <UploadIconContext.Provider
      value={{
        step,
        setStep,
        imgSrc,
        setImgSrc,
        croppedImg,
        setCroppedImg,
        hiddenImgEl,
        setHiddenImgEl,
        cloudinaryTempUrl,
        setCloudinaryTempUrl,
      }}
    >
      {step === STEPS.chooseSource && <ChooseSource />}
      {/* {step === STEPS.cropImage && <ImageCrop />} */}
      <img src={croppedImgUrl} />
    </UploadIconContext.Provider>
  );
}

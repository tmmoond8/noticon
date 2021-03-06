/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { Loader } from 'notion-ui';
import UploadIconContext, { useUploadIconContext } from './context';
import { STEPS } from './constant';
import ChooseSource from './ChooseSource';
import ImageCrop from './ImageCrop';
import EditMetaData from './EditMetaData';
import { Noticon } from '../../types';

interface UploadIconProps {
  closeModal: () => void;
  unshightIcon: (icon: Noticon) => void;
}

export default function UploadIcon(props: UploadIconProps): JSX.Element {
  const { closeModal, unshightIcon } = props;
  const context = useUploadIconContext();
  const [step, setStep] = React.useState(context.step);
  const [safeImgSrc, setSafeImgSrc] = React.useState<string>(
    context.safeImgSrc,
  );
  const [loading, setLoading] = React.useState(context.loading);
  const [croppedImg, setCroppedImg] = React.useState(context.croppedImg);
  const [croppedImgUrl, setCroppedImgUrl] = React.useState(
    context.croppedImgUrl,
  );
  const [imageFormat, setImageFormat] = React.useState(context.imageFormat);
  const [gifAlign, setGifAlign] = React.useState(context.gifAlign);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  return (
    <UploadIconContext.Provider
      value={{
        step,
        setStep,
        safeImgSrc,
        setSafeImgSrc,
        croppedImg,
        setCroppedImg,
        croppedImgUrl,
        setCroppedImgUrl,
        gifAlign,
        setGifAlign,
        loading,
        setLoading,
        closeModal,
        unshightIcon,
        imageFormat,
        setImageFormat,
        errorMessage,
        setErrorMessage,
      }}
    >
      {loading ? (
        <ModalLoader />
      ) : (
        <>
          {step === STEPS.CHOOSE_SOURCE && <ChooseSource />}
          {step === STEPS.CROP_IMAGE && <ImageCrop />}
          {step === STEPS.EDIT_METADATA && <EditMetaData />}
        </>
      )}
    </UploadIconContext.Provider>
  );
}

const ModalLoader = styled(Loader.ParentFull)`
  left: 0;
  top: 0;
`;

/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { Loader } from 'notion-ui';
import UploadIconContext, { useUploadIconContext } from './context';
import { STEPS } from './constant';
import ChooseSource from './ChooseSource';
import ImageCrop from './ImageCrop';

export default function UploadIcon(): JSX.Element {
  const context = useUploadIconContext();
  const [step, setStep] = React.useState(context.step);
  const [cloudinaryTempUrl, setCloudinaryTempUrl] = React.useState(
    context.cloudinaryTempUrl,
  );
  const [loading, setLoading] = React.useState(context.loading);

  return (
    <UploadIconContext.Provider
      value={{
        step,
        setStep,
        cloudinaryTempUrl,
        setCloudinaryTempUrl,
        loading,
        setLoading,
      }}
    >
      {loading ? (
        <ModalLoader />
      ) : (
        <>
          {step === STEPS.chooseSource && <ChooseSource />}
          {step === STEPS.cropImage && <ImageCrop />}
        </>
      )}
    </UploadIconContext.Provider>
  );
}

const ModalLoader = styled(Loader.ParentFull)`
  left: 0;
  top: 0;
`;

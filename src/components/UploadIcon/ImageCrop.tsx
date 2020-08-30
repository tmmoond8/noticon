/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import Cropper from '../Cropper';
import { Modal, Button } from 'notion-ui';
import { useUploadIconContext } from './context';
import { STEPS, ACCEPT_FORMATS } from './constant';

export default function ImageCrop(): JSX.Element {
  const {
    cloudinaryTempUrl,
    setStep,
    croppedImgUrl,
    setCroppedImg,
    croppedImg,
    setCroppedImgUrl,
    setLoading,
    imageFormat,
  } = useUploadIconContext();

  const handleNext = React.useCallback(async () => {
    if (croppedImg !== null) {
      setLoading(true);
      const reader = new FileReader();
      reader.readAsDataURL(croppedImg as Blob);
      reader.onload = () => {
        setCroppedImgUrl(reader!.result!.toString());
        setLoading(false);
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
        setLoading(false);
      };
      setStep(STEPS.editMetaData);
    }
  }, [croppedImg]);

  // for debug
  // React.useEffect(() => {
  //   if (croppedImg !== null) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(croppedImg as Blob);
  //     reader.onload = () => {
  //       setCroppedImgUrl(reader!.result!.toString());
  //     };
  //     reader.onerror = function (error) {
  //       console.log('Error: ', error);
  //     };
  //   }
  // }, [croppedImg]);

  return (
    <>
      {imageFormat === ACCEPT_FORMATS.GIF ? (
        <></>
      ) : (
        <Cropper.ImageCropper
          src={cloudinaryTempUrl}
          setCroppedImg={setCroppedImg}
        />
      )}

      <StyledModalSection>
        <StyledButton
          buttonType="PrimaryText"
          buttonSize="Big"
          onClick={handleNext}
        >
          Crop the image
        </StyledButton>
      </StyledModalSection>
      {croppedImgUrl && <img src={croppedImgUrl} />}
    </>
  );
}

const StyledButton = styled(Button)`
  width: 100%;
  height: 45px;
  margin: 0;
  padding: 0;
  font-size: 16px;
  text-align: left;
  border-radius: 0;
`;

const StyledModalSection = styled(Modal.Section)`
  margin-top: 0;
`;

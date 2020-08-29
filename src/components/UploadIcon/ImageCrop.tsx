/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import Cropper from '../Cropper';
import { Modal, Button } from 'notion-ui';
import { useUploadIconContext } from './context';
import { upload } from '../../apis';
import { STEPS } from './constant';

export default function ImageCrop(): JSX.Element {
  const { cloudinaryTempUrl, setStep, setLoading } = useUploadIconContext();
  const [croppedImg, setCroppedImg] = React.useState<File | null>(null);
  const [croppedImgUrl, setCroppedImgUrl] = React.useState<string | null>(null);

  const handleNext = React.useCallback(async () => {
    if (croppedImg !== null) {
      setLoading(true);
      try {
        const result = await upload(croppedImg, { temp: true });
        console.log(result);
        // todo croppedImg
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
      setStep(STEPS.metaData);
    }
  }, [croppedImg]);

  React.useEffect(() => {
    if (croppedImg !== null) {
      const reader = new FileReader();
      reader.readAsDataURL(croppedImg as Blob);
      reader.onload = () => {
        setCroppedImgUrl(reader!.result!.toString());
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
  }, [croppedImg]);

  return (
    <>
      <Cropper.ImageCropper
        src={cloudinaryTempUrl}
        setCroppedImg={setCroppedImg}
      />
      <StyledModalSection>
        <StyledButton
          buttonType="PrimaryText"
          buttonSize="Big"
          onClick={handleNext}
        >
          Load an image
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

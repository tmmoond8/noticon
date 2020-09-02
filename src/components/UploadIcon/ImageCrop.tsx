/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import Cropper from '../Cropper';
import { Modal, Button } from 'notion-ui';
import { useUploadIconContext } from './context';
import { STEPS, ACCEPT_FORMATS } from './constant';
import { readImageBlob, cropImage } from '../../libs/image';
import { CropPosition } from '../../types';

export default function ImageCrop(): JSX.Element {
  const {
    preloadImgSrc,
    setStep,
    croppedImg,
    setCroppedImgUrl,
    setLoading,
    imageFormat,
    setGifAlign,
  } = useUploadIconContext();
  const hiddenImgRef = React.useRef<HTMLImageElement>(null);
  const [cropPosition, setCropPosition] = React.useState<CropPosition>({
    x: 0,
    y: 0,
    height: 0,
    width: 0,
  });

  const handleCropImage = React.useCallback(async () => {
    if (hiddenImgRef && hiddenImgRef.current !== null) {
      setLoading(true);
      const imgDataURL = await cropImage(
        hiddenImgRef.current,
        cropPosition,
        'temp',
      );
      setLoading(false);
      setCroppedImgUrl(imgDataURL);
      setStep(STEPS.EDIT_METADATA);
    }
  }, [hiddenImgRef, croppedImg, cropPosition]);

  const handleCropGIF = React.useCallback(() => {
    setStep(STEPS.EDIT_METADATA);
  }, [setStep]);

  const handleImgLoad = () => {
    console.log('image loaded');
  };

  return (
    <>
      {imageFormat === ACCEPT_FORMATS.GIF ? (
        <>
          <Cropper.GIFCropper src={preloadImgSrc} setGifAlign={setGifAlign} />
          <StyledModalSection>
            <StyledButton
              buttonType="PrimaryText"
              buttonSize="Big"
              onClick={handleCropGIF}
            >
              Crop the image
            </StyledButton>
          </StyledModalSection>
        </>
      ) : (
        <>
          <Cropper.ImageCropper
            src={preloadImgSrc}
            setCropPosition={setCropPosition}
          />

          <StyledModalSection>
            <StyledButton
              buttonType="PrimaryText"
              buttonSize="Big"
              onClick={handleCropImage}
            >
              Crop the image
            </StyledButton>
          </StyledModalSection>
        </>
      )}

      <img
        ref={hiddenImgRef}
        hidden
        src={preloadImgSrc}
        onLoad={handleImgLoad}
        crossOrigin="anonymous"
      />
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

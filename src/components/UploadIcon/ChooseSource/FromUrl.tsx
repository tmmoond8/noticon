/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { Modal, Button, TextField, Content, colors } from 'notion-ui';
import browser from 'browser-detect';
import { STEPS, ACCEPT_FORMATS } from '../constant';
import { useUploadIconContext } from '../context';
import {
  imgSrc2Blob,
  getImageFormatByName,
  readImageBlob,
} from '../../../libs/image';

export default React.memo(function ImageFromUrl(): JSX.Element {
  const {
    setLoading,
    imageFormat,
    setImageFormat,
    setStep,
    preloadImgSrc,
    setPreloadImgSrc,
  } = useUploadIconContext();

  const [imgSrc, setImgSrc] = React.useState<string>('');
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const handleChangeImgSrc = React.useCallback(
    (e) => {
      setImgSrc(e.target.value);
      setImageFormat(null);
    },
    [setImgSrc],
  );

  const handleImgLoaded = React.useCallback(async () => {
    const { mobile, os } = browser();
    setLoading(true);
    let preImgFormat = imageFormat || (await getImageFormatByName(imgSrc));
    if (preImgFormat === null) {
    }
    setImageFormat(preImgFormat);
    if (
      mobile &&
      os?.includes('OS X') &&
      preloadImgSrc === imgSrc &&
      preImgFormat !== ACCEPT_FORMATS.GIF
    ) {
      const imgBlob = await imgSrc2Blob(imgSrc, preImgFormat as string);
      readImageBlob(
        imgBlob,
        (data) => {
          setPreloadImgSrc(data);
          setLoading(false);
          setStep(STEPS.CROP_IMAGE);
        },
        function (error) {
          setImgSrc('');
          console.log('Error: ', error);
        },
      );
    } else {
      setLoading(false);
      setStep(STEPS.CROP_IMAGE);
    }
  }, [preloadImgSrc, imgSrc, setLoading]);

  React.useEffect(() => {
    if (
      imageFormat !== null &&
      !Object.values(imageFormat).includes(imageFormat)
    ) {
      setImgSrc('');
      setErrorMessage('Not supported format');
    }
    setErrorMessage(null);
  }, [imageFormat]);

  return (
    <>
      <ImageSrcTextField
        id="ChooseSourceImage"
        value={imgSrc}
        placeholder="paset in https://..."
        onChange={handleChangeImgSrc}
      />
      <Modal.Section>
        <StyledButton
          buttonType="PrimaryText"
          buttonSize="Big"
          onClick={() => setPreloadImgSrc(imgSrc)}
        >
          Load an image
        </StyledButton>
      </Modal.Section>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <img
        src={preloadImgSrc}
        onLoad={handleImgLoaded}
        onError={() => console.log('image load error')}
      />
    </>
  );
});

const StyledButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 45px;
  padding: 0;
  font-size: 16px;
  text-align: left;
  border-radius: 0;
`;

const ImageSrcTextField = styled(TextField)`
  width: 100%;
  height: 45px;
  margin: 28px 0 0 0;
  & > div {
    height: 100%;
    padding: 10px 16px;
    background-color: ${colors.modalContentWrapper};
    box-shadow: ${colors.grey08} 0px 1px 0px, ${colors.grey08} 0px -1px 0px;
    font-size: 16px;
  }
`;

const ErrorMessage = styled(Content.Text)`
  font-size: 16px;
  color: ${colors.red};
  padding: 16px;
`;

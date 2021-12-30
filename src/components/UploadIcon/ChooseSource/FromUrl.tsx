/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { Modal, Button, TextField, Content, colors } from 'notion-ui';
import { STEPS, ACCEPT_FORMATS } from '../constant';
import { useUploadIconContext } from '../context';
import { imgSrc2DataURL } from '../../../libs/image';
import APIS from '../../../apis';
import { ImageForamt } from '../../../types';

export default React.memo(function ImageFromUrl(): JSX.Element {
  const {
    setLoading,
    imageFormat,
    setImageFormat,
    setStep,
    safeImgSrc,
    setSafeImgSrc,
    setErrorMessage,
  } = useUploadIconContext();

  const [imgSrc, setImgSrc] = React.useState<string>('');
  const [preLoadImgSrc, setPreloadImgSrc] = React.useState<string>('');

  const handleChangeImgSrc = React.useCallback(
    (e) => {
      setImgSrc(e.target.value);
      setImageFormat(null);
      setErrorMessage(null);
    },
    [setImgSrc],
  );

  const handleImgLoaded = React.useCallback(async () => {
    setLoading(true);
    let format, imgUrl;
    try {
      const tempImage = await APIS.Cloudinary.uploadTemp(imgSrc);
      format = tempImage.format;
      imgUrl = tempImage.imgUrl;
    } catch (error) {
      setImgSrc('');
      setSafeImgSrc('');
      setImageFormat(null);
      setLoading(false);
      setErrorMessage('Access denied : unusable file');
      return;
    }

    const preImgFormat = `image/${format}`;
    setImageFormat(preImgFormat);

    setErrorMessage(name as string);
    const dataURL =
      preImgFormat === ACCEPT_FORMATS.GIF
        ? imgUrl
        : await imgSrc2DataURL(imgUrl, preImgFormat as string);
    setSafeImgSrc(dataURL);
    setLoading(false);
    setStep(STEPS.CROP_IMAGE);
  }, [safeImgSrc, setStep, imgSrc, setLoading]);

  React.useEffect(() => {
    if (
      imageFormat !== null &&
      !Object.values(ACCEPT_FORMATS).includes(imageFormat as ImageForamt)
    ) {
      setImgSrc('');
      setErrorMessage('Not supported format');
    }
  }, [imageFormat]);

  return (
    <>
      <ImageSrcTextField
        id="ChooseSourceImage"
        value={imgSrc}
        placeholder="https://..."
        onChange={handleChangeImgSrc}
      />
      <Modal.Section>
        <StyledButton
          buttonType="PrimaryText"
          buttonSize="Big"
          onClick={() => {
            setPreloadImgSrc(imgSrc);
            setTimeout(() => {
              setErrorMessage(
                'Check your URL. Or the URL access denied. Try to download the file from the url and upload it',
              );
            }, 1500);
          }}
        >
          Load an image
        </StyledButton>
      </Modal.Section>
      <img hidden src={preLoadImgSrc} onLoad={handleImgLoaded} />
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

const UploadGuide = styled(Content.Text)`
  padding: 16px;
`;

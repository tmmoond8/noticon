/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { Modal, Button, TextField, Content, colors } from 'notion-ui';
import { ACCEPT_FORMATS } from '../constant';
import browser from 'browser-detect';
import { uploadTemp } from '../../../apis';
import { useUploadIconContext } from '../context';

export default React.memo(function ImageFromUrl(): JSX.Element {
  const {
    setLoading,
    setImageFormat,
    imageFormat,
    setPreloadImgSrc,
  } = useUploadIconContext();

  const [imgSrc, setImgSrc] = React.useState<string>('');
  const [t, s] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const handleChangeImgSrc = React.useCallback(
    (e) => {
      setImgSrc(e.target.value);
      setImageFormat(null);
    },
    [setImgSrc],
  );

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

  const handleSafetify = async () => {
    const { mobile, os } = browser();
    if (mobile && os?.includes('OS X')) {
      // todo local file
    } else {
      setPreloadImgSrc(imgSrc);
    }
  };

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
          onClick={handleSafetify}
        >
          Load an image
        </StyledButton>
      </Modal.Section>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {t}
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

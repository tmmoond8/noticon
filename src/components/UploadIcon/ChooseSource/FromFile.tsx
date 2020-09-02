/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { Modal, Button, Content, colors } from 'notion-ui';
import { ACCEPT_FORMATS, STEPS } from '../constant';
import { useUploadIconContext } from '../context';
import { readImageBlob } from '../../../libs/image';
import { ImageForamt } from '../../../types';

export default React.memo(function FromFile(): JSX.Element {
  const {
    setStep,
    preloadImgSrc,
    setImageFormat,
    setPreloadImgSrc,
    setErrorMessage,
  } = useUploadIconContext();

  const fileRef = React.useRef<HTMLInputElement>(null);

  const preImageRef = React.useRef(null);

  const handleChangeFile = (event: React.ChangeEvent) => {
    event.preventDefault();
    const fileElement = event.target as HTMLInputElement;
    const files = fileElement.files;

    if (files && files.length > 0) {
      setErrorMessage(null);
      if (
        !Object.values(ACCEPT_FORMATS).includes(files[0].type as ImageForamt)
      ) {
        console.log('not support error');
        fileElement.value = '';
        setErrorMessage('Not Supported format');
        return;
      }
      setImageFormat(files[0].type);
      readImageBlob(
        files[0],
        (data) => {
          setPreloadImgSrc(data);
        },
        function (error) {
          fileElement.value = '';
          console.log('Error: ', error);
        },
      );
    }
  };

  return (
    <>
      <Modal.Section>
        <StyledButton
          buttonType="PrimaryText"
          buttonSize="Big"
          onClick={() => {
            if (fileRef.current) {
              fileRef.current.click();
            }
          }}
        >
          Load an image
          <Content.Text color={colors.grey60}>
            ( JPG, PNG, GIF, BMP )
          </Content.Text>
        </StyledButton>
        <input
          ref={fileRef}
          id="ChooseSourceFile"
          type="file"
          hidden
          accept={Object.values(ACCEPT_FORMATS).join(', ')}
          onChange={handleChangeFile}
          onError={(e) => {
            (e.target as HTMLInputElement).value = '';
            console.log('Error: ', e);
          }}
        />
      </Modal.Section>
      <img
        src={preloadImgSrc}
        hidden
        ref={preImageRef}
        crossOrigin="anonymous"
        onLoad={() => setStep(STEPS.CROP_IMAGE)}
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

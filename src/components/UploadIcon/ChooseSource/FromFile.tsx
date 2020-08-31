/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { Modal, Button, Content, colors } from 'notion-ui';
import { ACCEPT_FORMATS, ImageForamt } from '../constant';

interface FromFileProps {
  setImageFormat: (imageFormat: string | null) => void;
  setPreloadImgSrc: (src: string) => void;
}

export default React.memo(function FromFile(props: FromFileProps): JSX.Element {
  const { setImageFormat, setPreloadImgSrc } = props;
  const fileRef = React.useRef<HTMLInputElement>(null);
  const [_, setFile] = React.useState<File | null>(null);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

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
      setFile(files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        setPreloadImgSrc(reader!.result!.toString());
      };
      reader.onerror = function (error) {
        fileElement.value = '';
        console.log('Error: ', error);
      };
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
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
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

const ErrorMessage = styled(Content.Text)`
  font-size: 16px;
  color: ${colors.red};
  padding: 16px;
`;

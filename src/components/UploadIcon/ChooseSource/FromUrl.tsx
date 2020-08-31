/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { Modal, Button, TextField, colors } from 'notion-ui';

interface ImageFromUrlProps {
  setPreloadImgSrc: (src: string) => void;
}

export default function ImageFromUrl(props: ImageFromUrlProps): JSX.Element {
  const { setPreloadImgSrc } = props;
  const [imgSrc, setImgSrc] = React.useState<string>(
    'https://blog-assets.hootsuite.com/wp-content/uploads/2018/04/Nyan-Cat-GIF-source.gif',
  );

  const handleChangeImgSrc = React.useCallback(
    (e) => {
      setImgSrc(e.target.value);
    },
    [setImgSrc],
  );

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
          onClick={() => {
            setPreloadImgSrc(imgSrc);
          }}
        >
          Load an image
        </StyledButton>
      </Modal.Section>
    </>
  );
}

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

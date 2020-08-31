/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { Modal, Button, TextField, Content, colors } from 'notion-ui';
import { ACCEPT_FORMATS } from '../constant';

interface ImageFromUrlProps {
  setPreloadImgSrc: (src: string) => void;
  imageFormat: string | null;
  setImageFormat: (src: string | null) => void;
}

export default React.memo(function ImageFromUrl(
  props: ImageFromUrlProps,
): JSX.Element {
  const { setPreloadImgSrc, imageFormat, setImageFormat } = props;
  const [imgSrc, setImgSrc] = React.useState<string>(
    'https://blog-assets.hootsuite.com/wp-content/uploads/2018/04/Nyan-Cat-GIF-source.gif',
  );

  const handleChangeImgSrc = React.useCallback(
    (e) => {
      setImgSrc(e.target.value);
      setImageFormat(null);
    },
    [setImgSrc],
  );

  const errorMessage = React.useMemo(() => {
    if (
      imageFormat !== null &&
      !Object.values(imageFormat).includes(imageFormat)
    ) {
      setImgSrc('');
      return 'Not supported format';
    }
    return null;
  }, [imageFormat, imgSrc]);

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

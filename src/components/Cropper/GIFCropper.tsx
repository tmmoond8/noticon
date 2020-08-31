/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import Cropper from 'react-easy-crop';
import { colors } from 'notion-ui';
import { GIF_ALIGN, GifAlign } from '../UploadIcon/constant';

interface ImageCropperProps {
  src: string;
  setGifAlign: (align: GifAlign) => void;
}

interface CroppedArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default function ImageCropper(props: ImageCropperProps): JSX.Element {
  const { src, setGifAlign } = props;
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [isReady, setIsReady] = React.useState(false);
  const [imageSize, setImageSize] = React.useState({
    height: 0,
    naturalHeight: 0,
    width: 0,
    naturalWidth: 0,
  });

  const handleCropCompplete = async (
    croppedArea: CroppedArea,
    croppedAreaPixels: CroppedArea,
  ) => {
    const { x, y } = croppedAreaPixels;

    const { height, width, naturalHeight, naturalWidth } = imageSize;
    const range = Math.abs(naturalHeight - naturalWidth) / 2;
    const heightRatio = height / naturalHeight;
    const widthRatio = width / naturalWidth;

    if (naturalHeight > naturalWidth && y < range * 0.5) {
      setCrop({
        ...crop,
        y: range * heightRatio,
      });
      setGifAlign(GIF_ALIGN.TOP);
    } else if (naturalHeight > naturalWidth && y > range * 1.5) {
      setCrop({
        ...crop,
        y: -range * heightRatio,
      });
      setGifAlign(GIF_ALIGN.BOTTOM);
    } else if (naturalWidth > naturalHeight && x < range * 0.5) {
      setCrop({
        ...crop,
        x: range * widthRatio,
      });
      setGifAlign(GIF_ALIGN.LEFT);
    } else if (naturalWidth > naturalHeight && x > range * 1.5) {
      setCrop({
        ...crop,
        x: -range * widthRatio,
      });
      setGifAlign(GIF_ALIGN.RIGHT);
    } else {
      setCrop({ x: 0, y: 0 });
      setGifAlign(GIF_ALIGN.CENTER);
    }
  };

  const handleImgLoad = () => {
    setIsReady(true);
  };

  return (
    <Container className="ImageCropperContainer">
      <Wrapper className="ImageCropperWrapper" isReady>
        {isReady && (
          <Cropper
            onMediaLoaded={(imageSize) => {
              setImageSize(imageSize);
            }}
            image={src}
            crop={crop}
            zoom={1}
            aspect={1}
            onCropChange={setCrop}
            onCropComplete={handleCropCompplete}
            showGrid={false}
          />
        )}
      </Wrapper>
      <img hidden src={src} onLoad={handleImgLoad} crossOrigin="anonymous" />
    </Container>
  );
}

const Container = styled.div`
  background-color: ${colors.dimmed};
`;

const Wrapper = styled.div<{ isReady: boolean }>`
  visibility: ${(p) => (p.isReady ? 'visiblity' : 'hidden')};
  position: relative;
  width: 320px;
  height: 320px;
  max-height: 100vw;
  max-width: 100vw;
  margin: auto;
  color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 0 1000px;
`;

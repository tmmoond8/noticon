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
  const hiddenImgRef = React.useRef<HTMLImageElement>(null);
  const [isReady, setIsReady] = React.useState(false);

  const handleCropCompplete = async (
    croppedArea: CroppedArea,
    croppedAreaPixels: CroppedArea,
  ) => {
    const { x, y } = croppedAreaPixels;
    console.log(croppedArea, croppedAreaPixels);

    if (hiddenImgRef.current !== null) {
      const {
        naturalHeight: height,
        naturalWidth: width,
      } = hiddenImgRef.current;
      const range = Math.abs(height - width) / 2;

      console.log('x', x);
      console.log('y', y);
      console.log('range', range);

      if (height > width && y < range * 0.5) {
        setCrop({
          ...crop,
          y: range / 2,
        });
        setGifAlign(GIF_ALIGN.TOP);
      } else if (height > width && y > range * 1.5) {
        setCrop({
          ...crop,
          y: -range / 2,
        });
        setGifAlign(GIF_ALIGN.BOTTOM);
      } else if (width > height && x < range * 0.5) {
        setCrop({
          ...crop,
          x: range,
        });
        setGifAlign(GIF_ALIGN.LEFT);
      } else if (width > height && x > range * 1.5) {
        setCrop({
          ...crop,
          x: -range,
        });
        setGifAlign(GIF_ALIGN.RIGHT);
      } else {
        setCrop({ x: 0, y: 0 });
        setGifAlign(GIF_ALIGN.CENTER);
      }
    }
  };

  const setCropWithLog = (crop: { x: number; y: number }) => {
    console.log(crop);
    setCrop(crop);
  };

  const handleImgLoad = () => {
    setIsReady(true);
  };

  return (
    <Container className="ImageCropperContainer">
      <Wrapper className="ImageCropperWrapper" isReady>
        {isReady && (
          <Cropper
            image={src}
            crop={crop}
            zoom={1}
            aspect={1}
            onCropChange={setCropWithLog}
            onCropComplete={handleCropCompplete}
            showGrid={false}
          />
        )}
      </Wrapper>
      <img
        ref={hiddenImgRef}
        hidden
        src={src}
        onLoad={handleImgLoad}
        crossOrigin="anonymous"
      />
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

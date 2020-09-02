/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import Cropper from 'react-easy-crop';
import { colors } from 'notion-ui';
import { CropPosition } from '../../types';

interface ImageCropperProps {
  src: string;
  setCropPosition: (cropPosition: CropPosition) => void;
}

export default function ImageCropper(props: ImageCropperProps): JSX.Element {
  const { src, setCropPosition } = props;
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);
  const hiddenImgRef = React.useRef<HTMLImageElement>(null);

  const handleCropCompplete = async (
    croppedArea: CropPosition,
    croppedAreaPixels: CropPosition,
  ) => {
    setCropPosition(croppedAreaPixels);
  };

  return (
    <Container className="ImageCropperContainer">
      <Wrapper className="ImageCropperWrapper" isReady>
        <Cropper
          image={src}
          crop={crop}
          zoom={zoom}
          aspect={1}
          onCropChange={setCrop}
          onCropComplete={handleCropCompplete}
          onZoomChange={setZoom}
          showGrid={false}
        />
      </Wrapper>
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

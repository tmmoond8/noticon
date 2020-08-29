/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import Cropper from 'react-easy-crop';
import { colors } from 'notion-ui';

interface ImageCropperProps {
  src: string;
  setCroppedImg: (cropped: any) => void;
}

interface CroppedArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ImageBlob extends Blob {
  name?: string;
  lastModifiedDate?: Date;
}

const cropImage = async (
  image: CanvasImageSource,
  crop: CroppedArea,
  fileName: string,
): Promise<ImageBlob> => {
  const canvas = document.createElement('canvas');
  const { x, y, height, width } = crop;
  canvas.width = width;
  canvas.height = height;
  console.dir(image);
  const ctx = canvas.getContext('2d');
  console.log('draw');
  console.log('x', x);
  console.log('y', y);
  console.log('width', width);
  console.log('height', height);
  ctx!.drawImage(image, x, y, width, height, 0, 0, width, height);

  return new Promise((resolve, reject) => {
    canvas &&
      canvas.toBlob((blob: ImageBlob | null) => {
        if (!blob) {
          reject(new Error('Canvas is empty'));
          return;
        }
        blob['name'] = fileName;
        blob['lastModifiedDate'] = new Date();
        resolve(blob);
      }, 'image/png');
  });
};

export default function ImageCropper(props: ImageCropperProps): JSX.Element {
  const { src, setCroppedImg } = props;
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);
  const hiddenImgRef = React.useRef<HTMLImageElement>(null);
  const [isReady, setIsReady] = React.useState(false);

  const handleCropCompplete = async (
    croppedArea: CroppedArea,
    croppedAreaPixels: CroppedArea,
  ) => {
    console.log(croppedArea, croppedAreaPixels);

    if (hiddenImgRef.current !== null && isReady) {
      const imageBlob = await cropImage(
        hiddenImgRef.current,
        croppedAreaPixels,
        'abc',
      );
      setCroppedImg(imageBlob);
    }
  };

  const handleImgLoad = (e) => {
    setIsReady(true);
  };

  return (
    <Container className="ImageCropperContainer">
      <Wrapper className="ImageCropperWrapper">
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

const Wrapper = styled.div`
  margin: auto;
  position: relative;
  width: 320px;
  height: 320px;
  max-height: 100vw;
  max-width: 100vw;
  color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 0 1000px;
`;

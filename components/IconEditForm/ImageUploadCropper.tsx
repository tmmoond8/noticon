import { useState, useCallback, useEffect } from 'react';
import ReactCrop from 'react-image-crop'; 
import styled from 'styled-components';

interface ImageUploadCropperPoprs {
  src: string;
  onChangeCropImage: (c) => void;
}

export default function ImageUploadCropper(props: ImageUploadCropperPoprs): JSX.Element {
  const { src, onChangeCropImage } = props;
  const [imgRef, setImgRef] = useState<HTMLImageElement | null>(null);
  const [crop, setCrop] = useState({ unit: '%', height: 100, aspect: 1 / 1 });
  const [ isEmptyCrop, setIsEmptyCrop ] = useState(true);
  const [ isPortrait, setIsPortrait] = useState(true);

  const onLoad = useCallback(img => {
    setImgRef(img);
  }, []);

  useEffect(() => {
    if (isEmptyCrop) {
      setTimeout(() => {
        makeClientCrop(crop);
      }, 2000);
    }
  }, [imgRef]);

  const makeClientCrop = async crop => {
    if (imgRef && crop.width && crop.height) {
      createCropPreview(imgRef, crop, 'newFile.jpeg');
      setIsPortrait(imgRef.width > imgRef.height);
    }
  };

  const createCropPreview = async (image, crop, fileName) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = 400;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');

    console.log('crop.width', crop.width);
    console.log('crop.height', crop.height);
    console.log('scaleX', scaleX);
    console.log('scaleY', scaleY);

    // const scale = Math.max(scaleX, scaleY);
    let option: {x: number; y: number; width: number; height: number } = {
      x: crop.x * scaleX,
      y: crop.y * scaleY,
      width: crop.width * scaleX,
      height: crop.height * scaleY,
    };
    if (isPortrait) {
      option = {
        x: crop.x * scaleX,
        y: crop.y * scaleY,
        width: crop.width * scaleX,
        height: crop.height * scaleY,
      }
    }

    ctx!.drawImage(
      image,
      option.x,
      option.y,
      option.width,
      option.height,
      0,
      0,
      400,
      400
    );
 
    setIsEmptyCrop(false);

    return new Promise((resolve, reject) => {
      canvas && canvas.toBlob(blob => {
        if (!blob) {
          reject(new Error('Canvas is empty'));
          return;
        }
        blob['name'] = fileName;
        blob['lastModifiedDate'] = new Date();
        onChangeCropImage(blob);
      }, 'image/png');
    });
  };

  return (
    <StyledReactCrop
      src={src}
      onImageLoaded={onLoad}
      crop={crop}
      onChange={c => setCrop(c)}
      onComplete={makeClientCrop}
      isPortrait={isPortrait}
    />
  )
}

const StyledReactCrop = styled(ReactCrop)<{isPortrait: boolean}>`
  &.ReactCrop {
    max-height: 140px;
    max-width: 140px;
    margin: 20px auto;
  }
  .ReactCrop__image {
    width: 140px;
    height: 140px;
    object-fit: cover;
  }
`;
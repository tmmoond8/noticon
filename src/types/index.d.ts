import { ACCEPT_FORMATS, GIF_ALIGN } from '../components/UploadIcon/constant';

/* eslint-disable @typescript-eslint/indent */
declare type VoidFunc = () => void;

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  >>;

  const src: string;
  export default src;
}

export interface Noticon {
  id: string;
  title: string;
  imgUrl: string;
  keywords: string;
  date: string;
}

declare global {
  type SVG = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export interface CropPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ImageBlob extends Blob {
  name?: string;
  lastModifiedDate?: Date;
}

export type ImageForamt = typeof ACCEPT_FORMATS[keyof typeof ACCEPT_FORMATS];

export type GifAlign = typeof GIF_ALIGN[keyof typeof GIF_ALIGN];

export interface CroppedArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

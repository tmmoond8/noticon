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
  date: number;
}

declare global {
  type SVG = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

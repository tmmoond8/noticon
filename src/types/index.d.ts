export interface Noticon {
  id: string;
  title: string;
  imgUrl: string;
  keywords: string;
  date?: number;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  >>;

  const src: string;
  export default src;
}

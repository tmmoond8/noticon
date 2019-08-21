import reactSizes from 'react-sizes';
export type Size = "desktop" | "ssr" | "phone" | "tablet";

const withSizes = (sizes: any) => {
  const { width } = sizes;
  let device: Size = 'desktop';
  if (!width) {
    device = 'ssr';
  }
  else if (width <= 576) {
    device = 'phone';
  } else if (width <= 768) {
    device = 'tablet';
  }
  return {
    device
  };
}

export default reactSizes(withSizes as any);
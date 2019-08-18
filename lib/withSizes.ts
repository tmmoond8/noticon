import reactSizes from 'react-sizes';

const mapSizesToProps = (sizes: any) => {
  const { width } = sizes;
  let device = 'desktop';
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

export default reactSizes(mapSizesToProps as any);
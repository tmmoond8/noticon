
let imageCompression;

const options = {
  maxSizeMB: 0.2,
  maxWidthOrHeight: 244,
}

if (process.browser) {
  imageCompression = require('browser-image-compression').default;
  console.log('browser');
}


export const resize = async (file: File) => {
  if (!imageCompression) {
    return false;
  }
  try {
    const compressedFile = await imageCompression(file, options);
    return  await imageCompression.getDataUrlFromFile(compressedFile)
  } catch (error) {
    console.error(error);
    return null;
  }
}
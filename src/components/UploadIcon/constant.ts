export const TABS = {
  Url: 'Url' as 'Url',
  File: 'File' as 'File',
};
export const METAS = {
  title: 'title' as 'title',
  tag1: 'tag1' as 'tag1',
  tag2: 'tag2' as 'tag2',
};
export const STEPS = {
  chooseSource: 'chooseSource' as 'chooseSource',
  cropImage: 'cropImage' as 'cropImage',
  editMetaData: 'editMetaData' as 'editMetaData',
  completeUpload: 'completeUpload' as 'completeUpload',
};

export const ACCEPT_FORMATS = {
  JPG: 'image/jpg' as 'image/jpg',
  JPEG: 'image/jpeg' as 'image/jpeg',
  PNG: 'image/png' as 'image/png',
  GIF: 'image/gif' as 'image/gif',
  BMP: 'image/bmip' as 'image/bmp',
};

export type ImageForamt = typeof ACCEPT_FORMATS[keyof typeof ACCEPT_FORMATS];

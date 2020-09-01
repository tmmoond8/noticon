/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import axios from 'axios';
import { Modal } from 'notion-ui';
import FromUrl from './FromUrl';
import FromFile from './FromFile';
import { TABS, STEPS, ACCEPT_FORMATS } from '../constant';
import { useUploadIconContext } from '../context';
import { uploadTemp } from '../../../apis';

export default function ChooseSource(): JSX.Element {
  const { tabs, selected, handleSelect } = Modal.useTabSelect(
    Object.values(TABS),
  );
  const {
    setStep,
    preloadImgSrc,
    setPreloadImgSrc,
    setLoading,
    setImageFormat,
    imageFormat,
  } = useUploadIconContext();

  const handleImgLoad = async () => {
    if (preloadImgSrc !== null) {
      setLoading(true);
      setPreloadImgSrc(preloadImgSrc);
    }
    setLoading(false);
    setStep(STEPS.CROP_IMAGE);
  };

  return (
    <>
      <Modal.TabSelect
        tabs={tabs}
        selected={selected}
        handleSelect={handleSelect}
      />
      {selected === TABS.URL && <FromUrl />}
      {selected === TABS.FILE && (
        <FromFile
          setPreloadImgSrc={setPreloadImgSrc}
          setImageFormat={setImageFormat}
        />
      )}
      <img
        src={preloadImgSrc}
        hidden
        crossOrigin="anonymous"
        onLoad={handleImgLoad}
        onError={() => console.log('image load error')}
      />
    </>
  );
}

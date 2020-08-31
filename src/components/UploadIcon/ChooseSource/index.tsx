/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import axios from 'axios';
import { Modal } from 'notion-ui';
import FromUrl from './FromUrl';
import FromFile from './FromFile';
import { TABS, STEPS } from '../constant';
import { useUploadIconContext } from '../context';
import { upload } from '../../../apis';

export default function ChooseSource(): JSX.Element {
  const { tabs, selected, handleSelect } = Modal.useTabSelect(
    Object.values(TABS),
  );
  const {
    setStep,
    setCloudinaryTempUrl,
    setLoading,
    setImageFormat,
  } = useUploadIconContext();
  const [preloadImgSrc, setPreloadImgSrc] = React.useState('');

  const handleImgLoad = async () => {
    if (preloadImgSrc !== null) {
      setLoading(true);
      try {
        const { imgUrl } = await upload(preloadImgSrc, { temp: true });
        setCloudinaryTempUrl(imgUrl);
        if (selected === TABS.URL) {
          const { data } = await axios.get(imgUrl, {
            responseType: 'blob',
          });
          console.log(data.type);
          setImageFormat(data.type);
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
    setStep(STEPS.CROP_IMAGE);
  };

  return (
    <>
      <Modal.TabSelect
        tabs={tabs}
        selected={selected}
        handleSelect={handleSelect}
      />
      {selected === TABS.URL && <FromUrl setPreloadImgSrc={setPreloadImgSrc} />}
      {selected === TABS.FILE && (
        <FromFile
          setPreloadImgSrc={setPreloadImgSrc}
          setImageFormat={setImageFormat}
        />
      )}
      <img
        src={preloadImgSrc}
        hidden
        onLoad={handleImgLoad}
        onError={() => console.log('image load error')}
      />
    </>
  );
}

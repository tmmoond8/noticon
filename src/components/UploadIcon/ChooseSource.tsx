/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import axios from 'axios';
import { Modal, Button, TextFiled, colors, Content } from 'notion-ui';
import { TABS, STEPS, ACCEPT_FORMATS, ImageForamt } from './constant';
import { useUploadIconContext } from './context';
import { upload } from '../../apis';

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
  const [imgSrc, setImgSrc] = React.useState<string>(
    'https://blog-assets.hootsuite.com/wp-content/uploads/2018/04/Nyan-Cat-GIF-source.gif',
  );
  const fileRef = React.useRef<HTMLInputElement>(null);
  const [file, setFile] = React.useState<File | null>(null);

  const handleChangeImgSrc = React.useCallback(
    (e) => {
      setImgSrc(e.target.value);
    },
    [setImgSrc],
  );

  const handleChangeFile = (event: React.ChangeEvent) => {
    event.preventDefault();
    const fileElement = event.target as HTMLInputElement;
    const files = fileElement.files;

    if (files && files.length > 0) {
      setImageFormat(files[0].type as ImageForamt);
      setFile(files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        setPreloadImgSrc(reader!.result!.toString());
      };
      reader.onerror = function (error) {
        fileElement.value = '';
        console.log('Error: ', error);
      };
    }
  };

  const handleImgLoad = async () => {
    const tempImgSrc = selected === TABS.URL ? imgSrc : file;
    if (tempImgSrc !== null) {
      setLoading(true);
      try {
        const uploadPromise = upload(tempImgSrc, { temp: true });
        if (selected === TABS.URL) {
          const getImagePromise = axios.get(preloadImgSrc, {
            responseType: 'blob',
          });
          const { data } = await getImagePromise;
          setImageFormat(data.type);
        }
        const { imgUrl } = await uploadPromise;
        setCloudinaryTempUrl(imgUrl);
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
      {selected === TABS.URL && (
        <>
          <ImageSrcTextField
            id="ChooseSourceImage"
            value={imgSrc}
            placeholder="paset in https://..."
            onChange={handleChangeImgSrc}
          />
          <Modal.Section>
            <StyledButton
              buttonType="PrimaryText"
              buttonSize="Big"
              onClick={() => {
                setPreloadImgSrc(imgSrc);
              }}
            >
              Load an image
            </StyledButton>
          </Modal.Section>
        </>
      )}
      {selected === TABS.FILE && (
        <>
          <Modal.Section>
            <StyledButton
              buttonType="PrimaryText"
              buttonSize="Big"
              onClick={() => {
                if (fileRef.current) {
                  fileRef.current.click();
                }
              }}
            >
              Load an image
              <Content.Text color={colors.grey60}>
                ( JPG, PNG, GIF, BMP )
              </Content.Text>
            </StyledButton>
            <input
              ref={fileRef}
              id="ChooseSourceFile"
              type="file"
              hidden
              accept={Object.values(ACCEPT_FORMATS).join(', ')}
              onChange={handleChangeFile}
              onError={(e) => {
                (e.target as HTMLInputElement).value = '';
                console.log('Error: ', e);
              }}
            />
          </Modal.Section>
        </>
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

const StyledButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 45px;
  padding: 0;
  font-size: 16px;
  text-align: left;
  border-radius: 0;
`;

const ImageSrcTextField = styled(TextFiled)`
  width: 100%;
  height: 45px;
  margin: 28px 0 0 0;
  & > div {
    height: 100%;
    padding: 10px 16px;
    background-color: ${colors.modalContentWrapper};
    box-shadow: ${colors.grey08} 0px 1px 0px, ${colors.grey08} 0px -1px 0px;
    font-size: 16px;
  }
`;

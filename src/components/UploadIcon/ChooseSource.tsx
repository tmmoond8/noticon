/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { Modal, Button, TextFiled, colors, Loader } from 'notion-ui';
import { TABS, METAS, STEPS } from './constant';
import { useUploadIconContext } from './context';
import { upload } from '../../apis';

export default function ChooseSource(): JSX.Element {
  const { tabs, selected, handleSelect } = Modal.useTabSelect(
    Object.values(TABS),
  );
  const { setStep, setCloudinaryTempUrl, setLoading } = useUploadIconContext();
  const [preloadImgSrc, setPreloadImgSrc] = React.useState('');
  const [imgSrc, setImgSrc] = React.useState<string>(
    'https://pelicana.co.kr/resources/images/menu/original_menu01_200529.png',
  );
  const fileRef = React.useRef<HTMLInputElement>(null);
  const imgRef = React.useRef<HTMLImageElement>(null);
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
    const tempImgSrc = selected === TABS.Url ? imgSrc : file;
    if (tempImgSrc !== null) {
      setLoading(true);
      try {
        const { imgUrl } = await upload(tempImgSrc, { temp: true });
        setCloudinaryTempUrl(imgUrl);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
    setStep(STEPS.cropImage);
  };

  return (
    <>
      <Modal.TabSelect
        tabs={tabs}
        selected={selected}
        handleSelect={handleSelect}
      />
      {selected === TABS.Url && (
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
      {selected === TABS.File && (
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
          </StyledButton>
          <input
            ref={fileRef}
            id="ChooseSourceFile"
            type="file"
            hidden
            onChange={handleChangeFile}
            onError={(e) => {
              (e.target as HTMLInputElement).value = '';
              console.log('Error: ', e);
            }}
          />
        </Modal.Section>
      )}
      <img
        src={preloadImgSrc}
        ref={imgRef}
        hidden
        onLoad={handleImgLoad}
        onError={() => console.log('image load error')}
      />
    </>
  );
}

const StyledButton = styled(Button)`
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
    background-color: ${colors.modalContentWrapper};
    box-shadow: ${colors.grey08} 0px 1px 0px, ${colors.grey08} 0px -1px 0px;
    font-size: 16px;
  }
`;

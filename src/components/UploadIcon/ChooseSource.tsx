/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { Modal, Button, TextFiled, colors } from 'notion-ui';
import { TABS, FIELDS, STEPS } from './constant';
import ImageUploadContext from './context';

export default function ChooseSource(): JSX.Element {
  const { tabs, selected, handleSelect } = Modal.useTabSelect(
    Object.values(TABS),
  );
  const { imgSrc, setImgSrc, setStep } = React.useContext(ImageUploadContext);
  const [preloadImgSrc, setPreloadImgSrc] = React.useState('');
  const fileRef = React.useRef<HTMLInputElement>(null);
  const handleChnageImgSrc = React.useCallback(
    (e) => {
      typeof setImgSrc === 'function' && setImgSrc(e.target.value);
    },
    [setImgSrc],
  );

  const handleChangeFile = (event: React.ChangeEvent) => {
    event.preventDefault();
    const fileElement = event.target as HTMLInputElement;
    const files = fileElement.files;
    if (files && files.length > 0) {
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
            id={FIELDS.imgUrl}
            value={imgSrc}
            placeholder="paset in https://..."
            onChange={handleChnageImgSrc}
          />
          <Modal.Section>
            <StyledButton
              buttonType="PrimaryText"
              buttonSize="Big"
              onClick={() => {
                console.log('Load an image');
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
            id={FIELDS.imgFile}
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
        hidden
        onLoad={() => setStep(STEPS.cropImage)}
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

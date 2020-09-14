/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { TextField, Button, Modal, Aside } from 'notion-ui';
import { METAS, STEPS, ACCEPT_FORMATS, PLACEHOLDER } from './constant';
import { useUploadIconContext } from './context';
import APIS from '../../apis';
import { GifAlign } from '../../types';

const useMetaInput = () => {
  const [metas, setMetas] = React.useState(
    Object.keys(METAS).reduce((accum, key) => {
      (accum as any)[key] = '';
      return accum;
    }, Object.assign({}, METAS)),
  );

  const handleInputChange = React.useCallback(
    (e) => {
      setMetas({
        ...metas,
        [e.target.id]: e.target.value,
      });
    },
    [metas],
  );
  return {
    metas,
    handleInputChange,
  };
};

export default function EditMetaData(): JSX.Element {
  const {
    setLoading,
    croppedImgUrl,
    safeImgSrc,
    setStep,
    closeModal,
    unshightIcon,
    imageFormat,
    gifAlign,
  } = useUploadIconContext();

  const { metas, handleInputChange } = useMetaInput();
  const asideClose = Aside.useCloseCallback();

  const disabled = React.useMemo(() => metas.title.length < 1, [metas.title]);

  const handleUploadImage = async () => {
    let requestUpload =
      imageFormat === ACCEPT_FORMATS.GIF
        ? () =>
            APIS.Cloudinary.upload(
              safeImgSrc,
              `${gifAlign?.toLocaleLowerCase()}_preset`,
            )
        : () => APIS.Cloudinary.upload(croppedImgUrl || '');

    setLoading(true);
    try {
      const { id, imgUrl } = await requestUpload();
      const newIcon = {
        id: id.replace('/', '_'),
        imgUrl,
        title: metas.title,
        keywords: [metas.tag1, metas.tag2].join('‡'),
      };
      const { status } = await APIS.SpreadSheet.append(newIcon);
      if (status === 200) {
        unshightIcon({
          ...newIcon,
          date: new Date().toISOString(),
        });
        asideClose();
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
    setStep(STEPS.COMPLETE_UPLOAD);
    closeModal();
  };

  return (
    <>
      <Form>
        {imageFormat === ACCEPT_FORMATS.GIF ? (
          <GifImg src={safeImgSrc} gifAlign={gifAlign as GifAlign} />
        ) : (
          <img src={croppedImgUrl} />
        )}
        <FiledGroup className="filed-group">
          {Object.values(METAS).map((key) => (
            <StyledTextField
              key={key}
              id={key}
              value={metas[key]}
              placeholder={PLACEHOLDER[key]}
              onChange={handleInputChange}
            />
          ))}
        </FiledGroup>
      </Form>
      <Modal.Section>
        <UploadConfrimButton
          buttonType="PrimaryText"
          buttonSize="Big"
          onClick={handleUploadImage}
          disabled={disabled}
        >
          Upload An Image
        </UploadConfrimButton>
      </Modal.Section>
    </>
  );
}

const Form = styled(Modal.Section)`
  display: flex;
  margin-top: 0;
  padding: 28px;
  align-items: center;
  img {
    width: 160px;
    height: 160px;
  }
  .filed-group {
    flex: 1;
    margin-left: 22px;
    .TextField input {
      font-size: 16px;
    }
  }
`;

const StyledTextField = styled(TextField)`
  .filed-group .TextField input {
  }
`;

const FiledGroup = styled.div`
  * + * {
    margin-top: 16px;
  }
`;

const UploadConfrimButton = styled(Button)`
  width: 100%;
  height: 45px;
  padding: 0 16px;
  text-align: left;
  border-radius: 0;
`;

const GifImg = styled.img<{ gifAlign: GifAlign }>`
  object-fit: cover;
  object-position: ${(p) => p.gifAlign.toLocaleLowerCase()};
`;

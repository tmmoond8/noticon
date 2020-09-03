/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { TextField, Button, Modal } from 'notion-ui';
import { METAS, STEPS, ACCEPT_FORMATS } from './constant';
import { useUploadIconContext } from './context';
import { upload, append } from '../../apis';
import { GifAlign } from '../../types';

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

  const disabled = React.useMemo(() => metas.title.length < 1, [metas.title]);

  const handleUploadImage = async () => {
    let requestUpload =
      imageFormat === ACCEPT_FORMATS.GIF
        ? () => upload(safeImgSrc, `${gifAlign?.toLocaleLowerCase()}_preset`)
        : () => upload(croppedImgUrl || '');

    setLoading(true);
    try {
      const { id, imgUrl } = await requestUpload();
      const newIcon = {
        id: id.replace('/', '_'),
        imgUrl,
        title: metas.title,
        keywords: [metas.tag1, metas.tag2].join('‡'),
      };
      const { status } = await append(newIcon);
      if (status === 200) {
        unshightIcon({
          ...newIcon,
          date: new Date().toString(),
        });
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
          <StyledTextField
            id={METAS.title}
            value={metas[METAS.title]}
            placeholder="title (required)"
            onChange={handleInputChange}
          />
          <StyledTextField
            id={METAS.tag1}
            value={metas[METAS.tag1]}
            placeholder="tag (option)"
            onChange={handleInputChange}
          />
          <StyledTextField
            id={METAS.tag2}
            value={metas[METAS.tag2]}
            placeholder="another tag (option)"
            onChange={handleInputChange}
          />
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

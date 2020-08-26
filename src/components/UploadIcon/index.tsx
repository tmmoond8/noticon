/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { TextFiled, Button, Modal } from 'notion-ui';
import { useStore, observer } from '../../stores';

interface UploadIconProps {}

const FIELDS = {
  imgUrl: 'imgUrl' as 'imgUrl',
  title: 'title' as 'title',
  tag1: 'tag1' as 'tag1',
  tag2: 'tag2' as 'tag2',
};

export default observer(function UploadIcon(
  props: UploadIconProps,
): JSX.Element {
  const {} = useStore();
  const [textFileds, setTextFiles] = React.useState(
    Object.keys(FIELDS).reduce((accum, key) => {
      (accum as any)[key] = '';
      return accum;
    }, Object.assign({}, FIELDS)),
  );
  const handleInputChange = React.useCallback(
    (e) => {
      setTextFiles({
        ...textFileds,
        [e.target.id]: e.target.value,
      });
    },
    [textFileds],
  );

  const { tabs, selected, handleSelect } = Modal.useTabSelect(['Url', 'File']);

  return (
    <>
      <Modal.TabSelect
        tabs={tabs}
        selected={selected}
        handleSelect={handleSelect}
      />
      <Modal.Section>
        <Form>
          <img src="https://res.cloudinary.com/dgggcrkxq/image/upload/v1598028330/noticon/vxemnmgycuqt416dsayz.png" />
          <FieldGroup className="field-group">
            {selected === 'Url' && (
              <StyledTextField
                id={FIELDS.imgUrl}
                value={textFileds[FIELDS.imgUrl]}
                placeholder="paset in https://..."
                onChange={handleInputChange}
              />
            )}
            {selected === 'File' && (
              <LocalFileButton buttonType="Primary" onClick={() => {}}>
                File
              </LocalFileButton>
            )}
            <StyledTextField
              id={FIELDS.title}
              value={textFileds[FIELDS.title]}
              placeholder="title"
              onChange={handleInputChange}
            />
            <StyledTextField
              id={FIELDS.tag1}
              value={textFileds[FIELDS.tag1]}
              placeholder="tag (option)"
              onChange={handleInputChange}
            />
            <StyledTextField
              id={FIELDS.tag2}
              value={textFileds[FIELDS.tag2]}
              placeholder="another tag (option)"
              onChange={handleInputChange}
            />
          </FieldGroup>
        </Form>
      </Modal.Section>
      <Modal.Section>
        <UploadConfrimButton
          buttonType="PrimaryText"
          buttonSize="Big"
          onClick={() => {
            console.log('upload');
          }}
        >
          Upload An Image
        </UploadConfrimButton>
      </Modal.Section>
    </>
  );
});

const Form = styled.form`
  display: flex;
  align-items: center;
  padding: 16px 0;
  img {
    width: 160px;
    height: 160px;
  }
  .filed-group {
    flex: 1;
    margin-left: 16px;
    .TextFiled input {
      font-size: 16px;
    }
  }
`;

const StyledTextField = styled(TextFiled)`
  .filed-group .TextFiled input {
  }
`;

const FieldGroup = styled.div`
  * + * {
    margin-top: 10px;
  }
`;

const LocalFileButton = styled(Button)`
  width: 100%;
`;

const UploadConfrimButton = styled(Button)`
  width: 100%;
  height: 45px;
  padding: 0 16px;
  text-align: left;
  border-radius: 0;
`;

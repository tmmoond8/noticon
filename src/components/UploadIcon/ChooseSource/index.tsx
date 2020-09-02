/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Modal } from 'notion-ui';
import FromUrl from './FromUrl';
import FromFile from './FromFile';
import { TABS } from '../constant';
import { useUploadIconContext } from '../context';
import { Content, colors } from 'notion-ui';

export default function ChooseSource(): JSX.Element {
  const { setImageFormat, errorMessage } = useUploadIconContext();

  const { tabs, selected, handleSelect } = Modal.useTabSelect(
    Object.values(TABS),
  );

  const handleSelectWrapper = (tab: string) => {
    setImageFormat(null);
    handleSelect(tab);
  };

  return (
    <>
      <Modal.TabSelect
        tabs={tabs}
        selected={selected}
        handleSelect={handleSelectWrapper}
      />
      {selected === TABS.URL && <FromUrl />}
      {selected === TABS.FILE && <FromFile />}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
}

const ErrorMessage = styled(Content.Text)`
  font-size: 16px;
  color: ${colors.red};
  padding: 16px;
`;

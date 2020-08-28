/** @jsx jsx */
import { jsx } from '@emotion/core';
import { UploadIconProvder, useUploadIconContext } from './context';
import { STEPS } from './constant';
import ChooseSource from './ChooseSource';

export default function UploadIcon(): JSX.Element {
  const context = useUploadIconContext();
  return (
    <UploadIconProvder>
      {context.step === STEPS.chooseSource && <ChooseSource />}
    </UploadIconProvder>
  );
}

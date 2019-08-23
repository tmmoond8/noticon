import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import FloatingButton from './FloatingButton';
import ScreenSkin from './UploadScreen';

const floatingAction = action('onClickFloating');
const onClickFloating = (() => {
  let isOpen;
  return () => {
    floatingAction();
    isOpen = !isOpen;
    return isOpen;
  }
})();

storiesOf('ScreenSkin', module).addDecorator(withKnobs)
  .add('FloatingButton', () => <FloatingButton isOpen={boolean('Disabled', false)} onClick={onClickFloating}/>)
  .add('ScreenSkin', () => <ScreenSkin/>)
  
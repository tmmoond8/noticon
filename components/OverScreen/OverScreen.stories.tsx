import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, withKnobs, object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import FloatingButton from './FloatingButton';
import OverScreen from './OverScreen';
import Loading from './Loading';

const floatingAction = action('onClickFloating');
const setOpenUploading = action('setOpenUploading');

const onClickFloating = (() => {
  let isOpen;
  return () => {
    floatingAction();
    isOpen = !isOpen;
    return isOpen;
  }
})();

storiesOf('OverScreen', module).addDecorator(withKnobs)
  .add('FloatingButton', () => <FloatingButton isOpen={boolean('isOpenUploading', false)} onClick={onClickFloating}/>)
  .add('Loading', () => <Loading type={"cubes"} color="#ffffff"/>)
  .add('OverScreen', () => (
    <OverScreen 
      scrollTop={0} 
      isOpenUploading={boolean('isOpenUploading', false)} 
      setOpenUploading={setOpenUploading}
      loading={object('loading', undefined)}
    />))
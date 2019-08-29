import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import IconEditForm from  './IconEditForm';
import TextInput from  './TextInput';

const onChangeInput = action('onChangeInput');
const onChangeFile = action('onChangeFile');
const onClickSendBtn = action('onClickSendBtn');
const onBlurImgSrc = action('onBlurImgSrc');
const onClickCancelBtn = action('onClickCancelBtn');

storiesOf('IconEditForm', module).addDecorator(withKnobs)
  .add('TextInput', () => <TextInput name="test" value="2323" onChangeInput={onChangeInput}/>)
  .add('TextInput empty', () => <TextInput name="test" value="" onChangeInput={onChangeInput}/>)
  .add('IconEditForm', () => (
    <IconEditForm 
      title=""
      imgSrc=""
      imgUrl="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAxMmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyczEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyLTEyIDUuMzczLTEyIDEyem0xOC0xaC00djdoLTR2LTdoLTRsNi02IDYgNnoiLz48L3N2Zz4="
      keyword1=""
      keyword2=""
      onChangeInput={onChangeInput} 
      onChangeFile={onChangeFile}
      onBlurImgSrc={onBlurImgSrc}
      onClickSendBtn={onClickSendBtn}
      onClickCancelBtn={onClickCancelBtn}
      isOpen={boolean('Disabled', false)}
    />
  ))

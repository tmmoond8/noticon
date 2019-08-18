import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import IconEditForm from  '././IconEditForm';
import TextInput from  '././TextInput';
const onInputChange = action('onInputChange');
const onFileChange = action('onFileChange');

storiesOf('IconEditForm', module)
  .add('TextInput', () => <TextInput name="test" value="2323" onInputChange={onInputChange}/>)
  .add('TextInput empty', () => <TextInput name="test" value="" onInputChange={onInputChange}/>)
  .add('IconEditForm', () => (
    <IconEditForm 
      title=""
      imgUrl="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAxMmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyczEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyLTEyIDUuMzczLTEyIDEyem0xOC0xaC00djdoLTR2LTdoLTRsNi02IDYgNnoiLz48L3N2Zz4="
      keyword1=""
      keyword2=""
      onInputChange={onInputChange} 
      onFileChange={onFileChange}
    />
  ))

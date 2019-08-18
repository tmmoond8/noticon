import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import IconEditForm from  '././IconEditForm';
import TextInput from  '././TextInput';
const onInputChange = action('onInputChange');

storiesOf('IconEditForm', module)
  .add('TextInput', () => <TextInput name="test" value="2323" onInputChange={onInputChange}/>)
  .add('TextInput empty', () => <TextInput name="test" value="" onInputChange={onInputChange}/>)
  .add('IconEditForm', () => <IconEditForm onInputChange={onInputChange}/>)

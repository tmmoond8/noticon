import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import Switch from  './Switch';

storiesOf('Switch', module).addDecorator(withKnobs)
  .add('Switch', () => (
    <Switch 
      isTrue={boolean("isTrue", true)}
      trueText="latest"
      falseText="alphabet"
      onToggle={action("onToggleMode")}
    />
  ))

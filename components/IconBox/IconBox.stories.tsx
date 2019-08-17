import React from 'react';

import { storiesOf } from '@storybook/react';
import IconBox from  './IconBox';

storiesOf('IconBox', module)
  .add('IconBox', () => (
    <IconBox 
      imgUrl="https://ucarecdn.com/13da67ee-9243-4022-9981-4d0c191b072b/-/resize/x120/"
      title="log"
    />
  ))

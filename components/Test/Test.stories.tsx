import React from 'react';

import { storiesOf } from '@storybook/react';
import Test from  './Test';

storiesOf('Test', module)
  .add('Test', () => <Test text="메롱"/>)

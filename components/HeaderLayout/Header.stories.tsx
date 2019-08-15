import React from 'react';

import { storiesOf } from '@storybook/react';
import Header from  './Header';
import SearchBar from  './SearchBar';
import HeaderLayout from  './HeaderLayout';
import { action } from '@storybook/addon-actions';
const onSearchChange = action('onSearchChange');

storiesOf('Header', module)
  .add('Header', () => <Header/>)
  .add('SearchBar', () => <SearchBar onSearchChange={onSearchChange}/>)
  .add('HeaderLayout', () => (<HeaderLayout onSearchChange={onSearchChange}>dff</HeaderLayout>))

import React from 'react';

import { storiesOf } from '@storybook/react';
import Header from  './Header';
import SearchBar from  './SearchBar';
import HeaderLayout from  './HeaderLayout';
import { action } from '@storybook/addon-actions';
const onSearchChange = action('onSearchChange');
const onSetLoading = action('onSetLoading');

storiesOf('Header', module)
  .add('Header', () => (
    <Header 
      search="dido" 
      onSearchChange={onSearchChange}
      onSetLoading={onSetLoading}
    />))
  .add('SearchBar', () => <SearchBar search="dido" onSearchChange={onSearchChange}/>)
  .add('HeaderLayout', () => (
    <HeaderLayout 
      search="str" 
      onSearchChange={onSearchChange}
      onSetLoading={onSetLoading as any}
    >dff</HeaderLayout>))

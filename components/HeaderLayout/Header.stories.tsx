import React from 'react';

import { storiesOf } from '@storybook/react';
import Header from  './Header';
import SearchBar from  './SearchBar';
import HeaderLayout from  './HeaderLayout';
import { action } from '@storybook/addon-actions';
const onSearchChange = action('onSearchChange');
const onToggleSortMode = action('onToggleSortMode');

storiesOf('Header', module)
  .add('Header', () => (
    <Header 
      search="dido" 
      onSearchChange={onSearchChange}
      sortMode="date"
      onToggleSortMode={onToggleSortMode as any}
    />))
  .add('SearchBar', () => <SearchBar search="dido" onSearchChange={onSearchChange}/>)
  .add('HeaderLayout', () => (
    <HeaderLayout 
      search="str" 
      onSearchChange={onSearchChange}
      sortMode="date"
      onToggleSortMode={onToggleSortMode as any}
    >dff</HeaderLayout>))

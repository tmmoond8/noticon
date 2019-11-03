import React from 'react';

import { storiesOf } from '@storybook/react';
import Gallery from  './Gallery';

const iconList = [
  { id: '1', imgUrl: 'https://ucarecdn.com/c8bdc957-8600-490f-8d7f-e0b2931d017a/dino.png', title: 'digital nomad', keywords: ''},
  { id: '2', imgUrl: 'https://ucarecdn.com/13da67ee-9243-4022-9981-4d0c191b072b/clipart839085.png', title: 'tlog color', keywords: 'notion'},
  { id: '3', imgUrl: 'https://ucarecdn.com/ba938b69-353f-4402-8bdf-3d8cae64e6df/http.jpg', title: 'http perfect guide', keywords: 'https'},
  { id: '4', imgUrl: 'https://ucarecdn.com/1aa5d3b3-bce4-4017-8402-d4828e64e149/RoundedIcon.png', title: 'yolobook', keywords: 'sns'},
  { id: '5', imgUrl: 'https://ucarecdn.com/069781e2-9d04-4508-9d42-a8a5a5ef3c7f/apollo.png', title: 'apollo', keywords: 'graphql'},
  { id: '6', imgUrl: 'https://ucarecdn.com/cd5649c5-ca1f-4cfe-baa6-8c480e4be231/http.png', title: 'http', keywords: ''},
  { id: '7', imgUrl: 'https://ucarecdn.com/8998ef61-e2a7-4777-9759-5d34ed2156d4/64logo.png', title: 'tlog outline', keywords: ''},
];

const hitIconList = new Set(iconList.map(i => i.id));

storiesOf('Gallery', module)
  .add('desktop', () => (
    <Gallery 
      iconList={iconList} 
      hitIconList={hitIconList}
      device="desktop"
      iconListMax={100}
    />
  ))
  .add('tablet', () => (
    <Gallery 
      iconList={iconList} 
      hitIconList={hitIconList}
      device="tablet"
      iconListMax={100}
    />
  ))
  .add('phone', () => (
    <Gallery 
      iconList={iconList} 
      hitIconList={hitIconList}
      device="phone"
      iconListMax={100}
    />
  ))
  .add('filterd phone', () => (
    <Gallery 
      iconList={iconList} 
      hitIconList={new Set([1,3,6,7])}
      device="phone"
      iconListMax={100}
    />
  ))

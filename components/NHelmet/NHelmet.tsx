import React from 'react';
import Head from 'next/head';

const title = 'Noticon';
const description = 'Icon Storage for Notion';
const image = 'https://user-images.githubusercontent.com/11402468/63695688-2c723100-c854-11e9-905b-8bd5c9555894.png';
const url = 'http://noticon.tammolo.com';

const ogTags = {
  'og:title': title,
  'og:description': description,
  'og:image': image,
  'og:image:type': 'image/png',
  'og:url': url,
  'og:locale': 'ko_KR',
  'og:site_name': title,
  'og:image:width': 346,
  'og:image:height': 196,
}
const twitterTags = {
  'twitter:card': 'summary',
  'twitter:title': title,
  'twitter:description': description,
  'twitter:image': image,
}

const NHelmet = () => {
  return (
    <Head>
      <title>Noticon</title>
      {<>{Object.keys(ogTags).map(key => <meta name={key} content={ogTags[key]}/>)}</>}
      {<>{Object.keys(twitterTags).map(key => <meta name={key} content={ogTags[key]}/>)}</>}
      <link rel="shortcut icon" href="https://res.cloudinary.com/dgggcrkxq/image/upload/v1566826573/noticon/favicon_j7lf1k.ico"/>
    </Head>
  )
}

export default NHelmet;
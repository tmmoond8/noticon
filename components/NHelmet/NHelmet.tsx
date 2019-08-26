import React from 'react';
import Helmet from 'react-helmet';

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
    <Helmet 
      title={`Noticon`}
      meta={[
        ...Object.keys(ogTags).map(key => ({ property: key, content: ogTags[key] })),
        ...Object.keys(twitterTags).map(key => ({ name: key, content: ogTags[key] })),

      ]}
      link={[
        { rel: 'shortcut icon', href: "https://res.cloudinary.com/dgggcrkxq/image/upload/v1566826573/noticon/favicon_j7lf1k.ico" }
      ]}
    />
  )
}

export default NHelmet;
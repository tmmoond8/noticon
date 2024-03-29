/** @jsx jsx */
import { jsx } from '@emotion/core';
import Head from 'next/head';
import { Meta, OgTags, TwitterTags } from './constants';

interface NoticonHeadProps {}

export default function NoticonHead(props: NoticonHeadProps): JSX.Element {
  return (
    <Head>
      <title>{Meta.Title}</title>
      <meta name="description" content={Meta.Description} />
      <meta name="keywords" content="notion, icon" />
      <meta charSet="UTF-8" />
      <meta name="author" content={Meta.Owner}></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      {
        <>
          {Object.entries(OgTags).map(([key, value]) => (
            <meta key={key} name={key} content={value.toString()} />
          ))}
        </>
      }
      {
        <>
          {Object.entries(TwitterTags).map(([key, value]) => (
            <meta key={key} name={key} content={value.toString()} />
          ))}
        </>
      }
      <link
        rel="shortcut icon"
        href="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566826573/noticon/favicon_j7lf1k.ico"
      />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
}

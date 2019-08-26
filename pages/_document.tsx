import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from '../styles/typed-components';

interface IProps {
  styleTags: Array<React.ReactElement<{}>>;
  helmetContext: any;
}

export default class MyDocument extends Document<IProps> {
  static getInitialProps({ renderPage }) {
    let app;
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      app = sheet.collectStyles(<App {...props} />),
      app
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags, helmetContext: app.helmetContext };
  }

  render() {
    const { helmetContext } = this.props;
    return (
      <html>
        <Head>
          {!!helmetContext && !! helmetContext.helmet && (
            <>
              {helmetContext.helmet.meta.toComponent()}
              {helmetContext.helmet.link.toComponent()}
              {helmetContext.helmet.title.toComponent()}
              {helmetContext.helmet.script.toComponent()}
            </>
          )}
          {this.props.styleTags}
        </Head>
        <body>
          <Main/>
          <NextScript />
        </body>
      </html>
    );
  }
}
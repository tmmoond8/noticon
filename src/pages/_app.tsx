import App from 'next/app';
import React from 'react';
import GlobalStyles from '../styles/globalStyles';

class ReactApp extends App {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <GlobalStyles />
        <Component {...pageProps} />
      </div>
    );
  }
}

export default ReactApp;

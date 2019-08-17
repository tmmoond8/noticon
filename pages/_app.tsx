import App from 'next/app';
import React from 'react';
import GlobalStyles from '../styles/global-styles';
import styled, { ThemeProvider } from '../styles/typed-components';
import HeaderLayout from '../components/HeaderLayout';
import { theme } from '../styles/theme';

const StyledApp = styled.div``;

class ReactApp extends App {
  public static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
    };
  }

  constructor(props: any) {
    super(props);
  }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <StyledApp>
        <GlobalStyles/>
        <ThemeProvider theme={theme}>
          <HeaderLayout>
            <Component {...pageProps}/>
          </HeaderLayout>
        </ThemeProvider>
      </StyledApp>
    );
  }
}

export default ReactApp;
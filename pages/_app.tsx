import App, { Container } from 'next/app';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'mobx-react';
import { initializeStore } from '../stores'
import GlobalStyles from '../styles/global-styles';
import { ThemeProvider } from '../styles/typed-components';
import HeaderLayout from '../components/HeaderLayout';
import NHelmet from '../components/NHelmet';
import { theme } from '../styles/theme';

class ReactApp extends App<any> {
  public static async getInitialProps(appContext) {
    const mobxStore = initializeStore(undefined)
    appContext.ctx.mobxStore = mobxStore

    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      initialMobxState: mobxStore,
    };
  }
  
  private mobxStore: any = null;

  constructor(props: any) {
    super(props);
    const isServer = !process.browser;
    this.mobxStore = isServer
      ? props.initialMobxState
      : initializeStore(props.initialMobxState);
  }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider {...this.mobxStore}>
          <NHelmet/>
          <GlobalStyles/>
          <ToastContainer position="top-center" style={{textAlign: 'center'}} autoClose={2000}/>
          <ThemeProvider theme={theme}>
            <HeaderLayout>
              <Component {...pageProps}/>
            </HeaderLayout>
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}

export default ReactApp;
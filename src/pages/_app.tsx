import App, { AppContext } from 'next/app';
import React from 'react';
import GlobalStyles from '../styles/globalStyles';
import { Provider } from 'mobx-react';
import { getStore, Stores } from '../stores';
import { isServer, isBrowser } from '../libs/utils';
import NoticonHead from '../components/NoticonHead';
import { register } from '../libs/serviceWorker';

export default class NoticonApp extends App {
  private mobxStore: Stores;

  public static async getInitialProps(appContext: AppContext) {
    const mobxStore = getStore();
    type NextPageContext = typeof appContext.ctx & {
      mobxStore: Stores;
    };
    (appContext.ctx as NextPageContext).mobxStore = mobxStore;

    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      initialMobxState: mobxStore,
    };
  }

  constructor(props: any) {
    super(props);
    this.mobxStore = isServer()
      ? props.initialMobxState
      : getStore(props.initialMobxState);
    if (isBrowser()) {
      register();
    }
  }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider {...this.mobxStore}>
        <NoticonHead />
        <GlobalStyles />
        <Component {...pageProps} />
      </Provider>
    );
  }
}
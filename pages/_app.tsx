import App from 'next/app';
import React from 'react';
import GlobalStyles from '../styles/global-styles';
import styled, { ThemeProvider } from '../styles/typed-components';
import HeaderLayout from '../components/HeaderLayout';
import { theme } from '../styles/theme';
import {
  get
} from '../lib/dataRequest';

const StyledApp = styled.div``;

interface IState {
  search: string;
}

class ReactApp extends App<any, IState> {
  state = {
    search: ''
  }
  public static async getInitialProps(appContext) {
    console.log('_app getInitialProps');
    const appProps = await App.getInitialProps(appContext);
    const iconList = await get('logo');
    appProps.pageProps = {
      iconList,
    }
    return {
      ...appProps,
    };
  }

  constructor(props: any) {
    super(props);
  }

  public render() {
    const { Component, pageProps } = this.props;
    const { search } = this.state;
    console.log('_app render', pageProps);
    return (
      <StyledApp>
        <GlobalStyles/>
        <ThemeProvider theme={theme}>
          <HeaderLayout search={search} onSearchChange={this.handleChangeInput}>
            <Component {...pageProps}/>
          </HeaderLayout>
        </ThemeProvider>
      </StyledApp>
    );
  }

  handleChangeInput:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { target: { name, value} } = event;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  }
}

export default ReactApp;
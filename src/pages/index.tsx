/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Layout, Content, Loader } from 'notion-ui';
import ReactGA from 'react-ga';
import Gallery from '../components/Gallery';
import Aside from '../components/Aside';
import Header from '../components/Header';
import { observer, useStore } from '../stores';

export default observer(function Index() {
  const { icon }  = useStore();
  React.useEffect(() => {
    ReactGA.initialize('UA-141390268-2');
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <Layout.App
      leftMenus={Header.LeftMenus}
      rightMenus={Header.RightMenus}
      aside={<Aside />}
    >
      {!icon.isLoaded && icon.icons.length === 0 ? (<Loader.FullScreen/>) : <Gallery />}
      <Content.Spacing size={64} />
    </Layout.App>
  );
})

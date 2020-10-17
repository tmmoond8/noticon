/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { Layout, Content } from 'notion-ui';
import ReactGA from 'react-ga';
import Gallery from '../components/Gallery';
import Aside from '../components/Aside';
import Header from '../components/Header';

export default function Index() {
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
      <Gallery />
      <Content.Spacing size={64} />
    </Layout.App>
  );
}

const Noticon = styled(Content.Text)`
  color: red;
`;

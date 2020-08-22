/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Layout, IconButton, Content } from 'notion-ui';
import Gallery from '../components/Gallery';
import Aside from '../components/Aside';
import Header from '../components/Header';

export default function Index() {
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

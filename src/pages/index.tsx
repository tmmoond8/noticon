/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useStore, observer } from '../stores';
import { Layout, IconButton, Content } from 'notion-ui';
import Gallery from '../components/Gallery';
import Aside from '../components/Aside';
import Header from '../components/Header';

export default observer(function Index() {
  return (
    <Layout.App
      leftMenus={Header.LeftMenus}
      rightMenus={
        <>
          <IconButton icon="moreHorizon" size="Big" className="MoreHorizon" />
          <IconButton icon="share" size="Big" className="Share" />
          <IconButton icon="notification" size="Big" className="Notification" />
        </>
      }
      aside={<Aside />}
    >
      <Gallery />
    </Layout.App>
  );
});

const Noticon = styled(Content.Text)`
  color: red;
`;

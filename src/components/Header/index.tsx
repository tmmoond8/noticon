/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import Icons from '../Icon';
import { Content } from 'notion-ui';

const NoticonLogo = styled(Icons.Noticon)`
  margin: 0 4px 0 8px;
`;
const NoticonText = styled(Content.Text)`
  margin: 4px 2px 0 4px;
`;

const LeftMenus = (
  <>
    <NoticonLogo />
    <NoticonText as="P">Noticon</NoticonText>
  </>
);

export default {
  LeftMenus,
};

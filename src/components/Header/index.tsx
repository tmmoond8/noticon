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

const GithubLink = () => {
  return (
    <a
      href="https://github.com/tmmoond8/noticon.git"
      target="_blank"
      css={css`
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 8px;
      `}
    >
      <Icons.Github />
    </a>
  );
};

const LeftMenus = (
  <>
    <NoticonLogo />
    <NoticonText as="P">Noticon</NoticonText>
    <GithubLink />
  </>
);

export default {
  LeftMenus,
};

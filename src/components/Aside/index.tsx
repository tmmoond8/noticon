/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useCallback, useState } from 'react';
import {
  Aside as AsideUI,
  loadTheme,
  toggleTheme,
  Switch,
  Content,
  colors,
} from 'notion-ui';
import { useStore, observer } from '../../stores';
import { copyText } from '../../libs/utils';

export default observer(function Aside(): JSX.Element {
  const theme = loadTheme();
  const {
    icon: { recentUsedIcons },
  } = useStore();
  const [isDark, setIsDark] = useState(theme === 'Dark');
  const handleClick = useCallback((imgUrl: string) => {
    copyText(imgUrl);
  }, []);
  const handleToggleTheme = useCallback(() => {
    setIsDark(!isDark);
    toggleTheme();
  }, [setIsDark, isDark]);

  return (
    <>
      <AsideUI.Group title="Recent Used" max={5}>
        {recentUsedIcons.map((recentUsedIcon) => (
          <AsideUI.Menu
            key={recentUsedIcon.id}
            title={recentUsedIcon.title}
            handleClick={() => handleClick(recentUsedIcon.imgUrl)}
            iconUrl={recentUsedIcon.imgUrl}
          />
        ))}
      </AsideUI.Group>
      <Content.Spacing size={20} />
      <ThemeMenu onClick={handleToggleTheme}>
        <Content.Text as="P">Dark mode</Content.Text>
        <Switch switchOn={isDark} />
      </ThemeMenu>
    </>
  );
});

const ThemeMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 14px;
  &:hover {
    background-color: ${colors.grey08};
  }
  &:active {
    background-color: ${colors.grey16};
  }
  cursor: pointer;
`;

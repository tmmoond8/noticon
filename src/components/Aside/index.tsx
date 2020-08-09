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

export default function Aside(): JSX.Element {
  const theme = loadTheme();
  const [isDark, setIsDark] = useState(theme === 'Dark');
  const handleClick = useCallback((name: string) => {
    console.log(name);
  }, []);
  const handleToggleTheme = useCallback(() => {
    setIsDark(!isDark);
    toggleTheme();
  }, [setIsDark, isDark]);

  return (
    <>
      <AsideUI.Group title="Recent Used">
        <AsideUI.Menu title="react" handleClick={() => handleClick('react')} />
        <AsideUI.Menu
          title="next.js"
          handleClick={() => handleClick('react')}
        />
        <AsideUI.Menu title="node" handleClick={() => handleClick('react')} />
      </AsideUI.Group>

      <ThemeMenu onClick={handleToggleTheme}>
        <Content.Text as="P">Dark mode</Content.Text>
        <Switch switchOn={isDark} />
      </ThemeMenu>
    </>
  );
}

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

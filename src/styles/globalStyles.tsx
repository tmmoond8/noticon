/** @jsx jsx */
import { jsx, Global, css } from '@emotion/core';
import emotionReset from 'emotion-reset';
import { colorCss, colors, useTheme } from 'notion-ui';

const customReset = css`
  html,
  body,
  body > div {
    height: auto;
    min-height: 100vh;
    background-color: ${colors.background};
  }
  a {
    text-decoration: none;
    color: unset;
  }
  button {
    background: none;
    border: none;
    outline: none;
  }
  * {
    box-sizing: border-box;
  }
`;

export default function GlobalStyles(): JSX.Element {
  useTheme();
  return <Global styles={[emotionReset, customReset, colorCss]} />;
}

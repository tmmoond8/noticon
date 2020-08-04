/** @jsx jsx */
import { jsx, Global, css } from '@emotion/core';
import emotionReset from 'emotion-reset';
import { colorCss, colors } from 'notion-ui';

const customReset = css`
  html,
  body,
  body > div {
    height: 100%;
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
  return <Global styles={[emotionReset, customReset, colorCss]} />;
}

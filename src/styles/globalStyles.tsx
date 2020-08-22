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

  @media screen and (device-aspect-ratio: 2/3) {
    select,
    textarea,
    input[type='text'],
    input[type='password'],
    input[type='datetime'],
    input[type='datetime-local'],
    input[type='date'],
    input[type='month'],
    input[type='time'],
    input[type='week'],
    input[type='number'],
    input[type='email'],
    input[type='url'] {
      font-size: 16px;
    }
  }

  /* Fix Input Zoom on iPhone 5, 5C, 5S, iPod Touch 5g */
  @media screen and (device-aspect-ratio: 40/71) {
    select,
    textarea,
    input[type='text'],
    input[type='password'],
    input[type='datetime'],
    input[type='datetime-local'],
    input[type='date'],
    input[type='month'],
    input[type='time'],
    input[type='week'],
    input[type='number'],
    input[type='email'],
    input[type='url'] {
      font-size: 16px;
    }
  }

  /* Fix Input Zoom on iPhone 6, iPhone 6s, iPhone 7  */
  @media screen and (device-aspect-ratio: 375/667) {
    select,
    textarea,
    input[type='text'],
    input[type='password'],
    input[type='datetime'],
    input[type='datetime-local'],
    input[type='date'],
    input[type='month'],
    input[type='time'],
    input[type='week'],
    input[type='number'],
    input[type='email'],
    input[type='tel'],
    input[type='url'] {
      font-size: 16px;
    }
  }

  /* Fix Input Zoom on iPhone 6 Plus, iPhone 6s Plus, iPhone 7 Plus, iPhone 8, iPhone X, XS, XS Max  */
  @media screen and (device-aspect-ratio: 9/16) {
    select,
    textarea,
    input[type='text'],
    input[type='password'],
    input[type='datetime'],
    input[type='datetime-local'],
    input[type='date'],
    input[type='month'],
    input[type='time'],
    input[type='week'],
    input[type='number'],
    input[type='email'],
    input[type='tel'],
    input[type='url'] {
      font-size: 16px;
    }
  }
`;

export default function GlobalStyles(): JSX.Element {
  useTheme();
  return <Global styles={[emotionReset, customReset, colorCss]} />;
}

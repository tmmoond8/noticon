import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { react_toastify } from './react-toastify';
import reactCrop from './react-crop';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${react_toastify}
  ${reactCrop}
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  * {
    box-sizing: border-box;
  }

  input {
    background-color: transparent;
    border: none;
    outline: none;
  }
  html {
    font-size: 16px;
  }
  @media only screen and (max-width: 768px) {
    html {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 576px) {
    html {
      font-size: 10px;
    }
  }
  
  /*** iPhone and iOS Form Input Zoom Fixes ***/
  /* Fix Input Zoom on devices older than iPhone 5: */
  @media screen and (device-aspect-ratio: 2/3) {
      select, textarea, input[type="text"], input[type="password"],
      input[type="datetime"], input[type="datetime-local"],
      input[type="date"], input[type="month"], input[type="time"],
      input[type="week"], input[type="number"], input[type="email"],
      input[type="url"]{ font-size: 16px; }
  }

  /* Fix Input Zoom on iPhone 5, 5C, 5S, iPod Touch 5g */
  @media screen and (device-aspect-ratio: 40/71) {
      select, textarea, input[type="text"], input[type="password"],
      input[type="datetime"], input[type="datetime-local"],
      input[type="date"], input[type="month"], input[type="time"],
      input[type="week"], input[type="number"], input[type="email"],
      input[type="url"]{ font-size: 16px; }
  }

  /* Fix Input Zoom on iPhone 6, iPhone 6s, iPhone 7  */
  @media screen and (device-aspect-ratio: 375/667) {
      select, textarea, input[type="text"], input[type="password"],
      input[type="datetime"], input[type="datetime-local"],
      input[type="date"], input[type="month"], input[type="time"],
      input[type="week"], input[type="number"], input[type="email"],
      input[type="url"]{ font-size: 16px; }
  }

  /* Fix Input Zoom on iPhone 6 Plus, iPhone 6s Plus, iPhone 7 Plus, iPhone 8, iPhone X, XS, XS Max  */
  @media screen and (device-aspect-ratio: 9/16) {
      select, textarea, input[type="text"], input[type="password"],
      input[type="datetime"], input[type="datetime-local"],
      input[type="date"], input[type="month"], input[type="time"],
      input[type="week"], input[type="number"], input[type="email"],
      input[type="url"]{ font-size: 16px; }
  }
`;

export default GlobalStyle;
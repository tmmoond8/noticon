import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { react_toastify } from './react-toastify';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${react_toastify}
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
`;

export default GlobalStyle;
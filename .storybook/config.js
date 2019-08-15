import { addDecorator, configure } from '@storybook/react';
import * as React from 'react'
import GlobalStyle from '../styles/global-styles';
import { theme } from '../styles/theme';
import { ThemeProvider } from '../styles/typed-components';

const req = require.context('../components', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

const withGlobal = (cb) => (
  <React.Fragment>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      {cb()}
    </ThemeProvider>
  </React.Fragment>
);

addDecorator(withGlobal);
configure(loadStories, module);
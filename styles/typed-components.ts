import React from 'react';
import * as styledComponents from "styled-components";
import { Theme } from './theme';

type StyledFunction<T> = styledComponents.ThemedStyledFunction<any, Theme>;

function withProps<T, U extends HTMLElement = HTMLElement>(
  styledFunction: StyledFunction<React.HTMLProps<U>>,
): StyledFunction<T & React.HTMLProps<U>> {
  return styledFunction;
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ServerStyleSheet
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export { css, createGlobalStyle, keyframes, ThemeProvider, withProps, ServerStyleSheet };
export default styled;
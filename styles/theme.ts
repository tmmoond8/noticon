import baseStyled, { css, ThemedStyledInterface } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
} as any;

// Iterate through the sizes and create a media template
const media = {
  desktop: (_: any) => undefined,
  tablet: (_: any) => undefined,
  phone: (_: any) => undefined,
}

Object.keys(sizes).reduce((acc: any, label: string) => {
  acc[label] = (args: any) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(args)}
    }
  `
  return acc
}, media);


const color = {
  blue: "#3498db",
  grey: "#7f8c8d",
  lightGrey: "#EAE8E8",
  violet: "#9775FA",
  deepViolet: "#7048e8",
}

export const theme = {
  color,
  media,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
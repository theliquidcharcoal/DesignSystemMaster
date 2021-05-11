import { css } from 'styled-components';
import { rgba } from 'polished';

// Global style variables
export const background = {
  app: '#F6F9FC',
  appInverse: '#7A8997',
  positive: '#E1FFD4',
  negative: '#FEDED2',
  warning: '#FFF5CF',
};

export const color = {
  // Palette
  // primary: '#FF4785', // coral
  // secondary: '#1EA7FD', // ocean
  tertiary: '#DDDDDD',

  orange: '#FC521F',
  gold: '#FFAE00',
  green: '#66BF3C',
  seafoam: '#37D5D3',
  purple: '#6F2CAC',
  ultraviolet: '#2A0481',

  // Monochrome
  lightest: '#FFFFFF',
  lighter: '#F8F8F8',
  // light: '#F3F3F3',
  mediumlight: '#EEEEEE',
  medium: '#DDDDDD',
  mediumdark: '#999999',
  // dark: '#666666',
  darker: '#444444',
  darkest: '#333333',

  border: 'rgba(0,0,0,.1)',

  // Status
  positive: '#66BF3C',
  negative: '#FF4400',
  // warning: '#E69D00',

   // Palette
   primary: '#0072CE', // coral
   secondary: '#7C878E', // ocean
   // tertiary: '#DDDDDD',
 
   // Status
   success: '#69AC20',
   info: '#00965E',
   warning: '#FFB600',
   danger: '#D50032',
 
   // Monochromes
   light: '#F5F6EE',
   dark: '#202529',
 
   // Brand Colors
   brand_d: '#F06637',
   brand_f: '#17935F',
 
   // Grays
   white:    '#fff',
   gray_100: '#F5F6EE',
   gray_200: '#e7ecf3',
   gray_300: '#d6dee2',
   gray_400: '#CDD2D1',
   gray_500: '#A2AAA4',
   gray_600: '#7C878E',
   gray_700: '#505759',
   gray_800: '#202529',
   gray_900: '#1d252d',
   black:    '#000',


};

export const spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
};

export const typography = {
  type: {
    primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48,
    code: 90,
  },
} as const;

export const breakpoint = 600;
export const pageMargin = 5.55555;

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;

export const hoverEffect = css`
  border: 1px solid ${color.border};
  border-radius: ${spacing.borderRadius.small}px;
  transition: background 150ms ease-out, border 150ms ease-out,
    transform 150ms ease-out;

  &:hover,
  &.__hover {
    border-color: ${rgba(color.secondary, 0.5)};
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }

  &:active,
  &.__active {
    border-color: ${rgba(color.secondary, 1)};
    transform: translate3d(0, 0, 0);
  }
`;
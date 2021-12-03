/*eslint-disable max-len*/
import { FC } from 'react';

import { IIcon } from 'components/Icons/Logo/types';

export const Logo: FC<IIcon> = ({ width = 1055, height = 368, color = '#06a34e' }) => (

  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width={width} height={height}
    viewBox="0 0 1055 368" preserveAspectRatio="xMidYMid meet">
    <g fill={color}>
      <path
        d="M666.3 365.9 c-3.6 -1.1 -4.6 -2.1 -3.7 -4.2 0.4 -1.2 2 -1.4 8.6 -1 8 0.6 8 0.6 7.6 -1.8 -0.2 -2 -1.1 -2.6 -5.8 -3.5 -7.6 -1.6 -9 -2.3 -10.1 -5.1 -1.4 -3.7 -0.1 -7 3.8 -9.3 4.8 -2.8 13.4 -2.6 17.1 0.5 0.2 0.2 -0.1 1.2 -0.7 2.3 -0.9 1.7 -1.5 1.8 -5.5 0.9 -5.4 -1.2 -7.6 -0.5 -7.6 2.6 0 2.1 0.7 2.5 5.8 3.7 6.4 1.4 8 2.4 9.3 5.8 2.6 6.8 -8.4 12.1 -18.8 9.1z"/>
      <path
        d="M697.3 365.1 c-4.6 -2.9 -5.3 -4.9 -5.3 -16.1 l0 -10.1 3.3 0.3 3.2 0.3 0.5 9.8 c0.5 10.5 1.1 11.7 6.1 11.7 4.6 0 6.3 -3.2 6.9 -12.8 l0.5 -8.7 3 0 3 0 0.3 13.3 0.3 13.3 -5.8 -0.2 c-3.2 -0.1 -7.4 0.1 -9.3 0.5 -2.6 0.5 -4.3 0.2 -6.7 -1.3z"/>
      <path
        d="M733.1 364.9 c-4.9 -3 -5.8 -4.1 -7 -8.7 -1.6 -5.9 0.8 -11.4 6.4 -14.7 4.6 -2.7 8.4 -3.1 13.6 -1.3 3.1 1 5.8 3.3 5.9 4.9 0 0.3 -1.2 1.1 -2.6 1.8 -2.2 1 -3 0.9 -4.4 -0.4 -2.1 -1.9 -6.9 -1.9 -9.8 0.1 -1.6 1.1 -2.2 2.5 -2.2 5.5 0 2.2 0.5 4.9 1 5.9 1.5 2.7 7.4 3.6 10.5 1.6 1.8 -1.2 3 -1.3 5 -0.6 2.2 0.8 2.4 1.3 1.5 3 -1.3 2.4 -7.1 5 -11.4 5 -1.7 0 -4.6 -0.9 -6.5 -2.1z"/>
      <path
        d="M765.5 365.8 c-11.8 -4.3 -12.7 -19.4 -1.5 -25 6.2 -3.1 14.5 -1.6 17 3.2 0.8 1.5 0.6 2.1 -1.1 3 -1.6 0.9 -2.4 0.8 -3.8 -0.4 -2.7 -2.5 -9.6 -2.1 -11.5 0.6 -2.4 3.3 -2 9.3 0.6 11.8 2.5 2.3 7.4 2.6 10.3 0.6 2.1 -1.4 6.5 -0.5 6.5 1.3 0 1.8 -6.1 5.3 -9.8 5.7 -2 0.2 -5 -0.2 -6.7 -0.8z"/>
      <path
        d="M794.3 365.1 c-10.2 -4.7 -10.9 -17.5 -1.3 -23.9 4.4 -3 11.1 -2.6 15.7 0.8 3.2 2.3 7 10.1 5.8 12 -0.3 0.6 -4.7 1 -10.1 1 -8.7 0 -9.4 0.2 -9.4 2 0 3.5 7.5 5.4 11.9 3 1.4 -0.7 2.3 -0.5 3.6 1 1.6 1.7 1.5 1.9 -0.7 3.4 -4 2.6 -10.7 2.9 -15.5 0.7z m12.7 -16.1 c0 -3 -4.3 -5.3 -8.4 -4.6 -3.3 0.6 -4.6 2.1 -4.6 5.2 0 1.1 1.6 1.4 6.5 1.4 5.8 0 6.5 -0.2 6.5 -2z"/>
      <path
        d="M822.7 365.8 c-3.1 -0.8 -3.8 -1.4 -3.5 -3.2 0.3 -2 0.8 -2.1 8.1 -1.7 7.8 0.3 7.9 0.3 7.5 -2 -0.2 -1.9 -1.2 -2.6 -4.3 -3.2 -2.2 -0.5 -5.6 -1.6 -7.5 -2.5 -3.1 -1.5 -3.5 -2.1 -3.5 -5.6 0 -3 0.6 -4.3 2.6 -5.9 3.3 -2.4 10.6 -3.3 15.2 -1.8 3.2 1.1 3.4 1.4 2.4 3.5 -1 2 -1.4 2.1 -4.7 1.3 -5.2 -1.4 -9 -0.3 -9 2.7 0 2.1 0.7 2.5 5.8 3.5 7.5 1.5 10.2 3.4 10.2 7.2 0 3.6 -2.7 6.5 -7.7 7.8 -4.5 1.3 -6.5 1.2 -11.6 -0.1z"/>
      <path
        d="M850.3 365.7 c-1.8 -0.7 -3.3 -1.5 -3.3 -1.9 -0.1 -3.6 -0.1 -3.6 8 -3.1 7.6 0.6 8 0.5 8 -1.5 0 -1.6 -1 -2.4 -4.2 -3.3 -9.4 -2.5 -11.2 -3.4 -11.9 -6.1 -2 -7.7 8 -13.2 18 -9.7 3.5 1.2 3.5 1.3 2.1 3.9 -0.8 1.6 -1.5 1.7 -4.6 0.8 -5.1 -1.3 -8.4 -0.4 -8.4 2.5 0 2 0.8 2.5 6.2 3.8 7.5 1.7 10.5 4.9 8.9 9.2 -2.2 5.7 -11 8.2 -18.8 5.4z"/>
      <path
        d="M523.7 328.8 c-1.7 -1.7 -2.6 -4 -3 -7.8 -0.5 -3.9 -1.3 -6 -2.8 -7.2 l-2.1 -1.8 2.1 -2.6 c1.2 -1.5 2.1 -3.2 2.1 -3.9 0 -1.1 2.1 -2.5 3.6 -2.5 0.3 0 1 1.3 1.5 2.9 0.8 2.2 1.8 3.1 3.7 3.3 3.6 0.4 3.6 3.2 0 3.6 -2.4 0.3 -2.8 0.8 -2.8 3.6 0 1.9 0.3 4.8 0.6 6.5 0.6 2.6 1.1 3.1 3.6 3.1 2.5 0 2.9 0.4 2.6 2.3 -0.5 3.3 -6 3.6 -9.1 0.5z"/>
      <path
        d="M498.5 319.8 c0.3 -5.7 1 -10.6 1.3 -11 0.4 -0.4 3.3 -0.4 6.5 -0.1 5.1 0.5 5.8 0.8 5.5 2.7 -0.2 1.3 -1.4 2.3 -3.5 2.9 -2.6 0.8 -3.3 1.7 -4.2 5.3 -0.6 2.3 -1.1 5.7 -1.1 7.3 0 2.7 -0.4 3.1 -2.6 3.1 l-2.7 0 0.8 -10.2z"/>
      <path
        d="M547.3 326.8 c-1.8 -0.5 -3.8 -1.8 -4.4 -2.9 -1.6 -3.1 -4.8 -15.2 -4.3 -16.1 0.3 -0.4 1.6 -0.8 2.8 -0.8 2 0 2.5 0.8 3.6 6.1 0.7 3.3 1.9 6.7 2.7 7.5 1.9 1.9 5.8 1.8 7.7 -0.2 2 -1.9 2 -4.4 0.3 -11.2 -1.5 -5.7 -1.4 -6.2 1.8 -6.2 1.8 0 2.4 1.2 4.4 9.5 1.3 5.3 2 10.2 1.7 11 -0.3 1 -1.9 1.5 -4.5 1.5 -2.2 0 -4.2 0.4 -4.5 0.9 -0.9 1.4 -3.9 1.8 -7.3 0.9z"/>
      <path
        d="M475.3 324.9 c-4.1 -1.2 -8.3 -6.2 -8.3 -10 0 -11.2 13 -15.9 20.7 -7.5 2 2.1 3.3 4.6 3.3 6.2 0 4.3 -2.9 9.1 -6.5 10.8 -3.7 1.8 -4.6 1.8 -9.2 0.5z m7.9 -5.6 c1.1 -1 1.8 -3 1.8 -5.3 0 -7.7 -9.4 -9 -11.9 -1.8 -1.5 4.2 -1.4 4.4 1.1 6.8 2.6 2.4 6.5 2.6 9 0.3z"/>
      <path
        d="M746.5 319.9 c-6.5 -1 -14.3 -2.6 -19 -3.9 -1.6 -0.5 -5.7 -1.6 -9 -2.5 -19.7 -5.3 -44.1 -17.7 -54.5 -27.6 -6.8 -6.5 -6.9 -5.8 1.7 -14.6 4.3 -4.4 8.3 -8.6 8.9 -9.4 3.7 -5 13.7 -20.7 17.9 -28.1 2.7 -4.9 5.2 -8.8 5.6 -8.8 0.3 0 2.6 1.8 4.9 4 2.3 2.2 4.7 4 5.2 4 0.5 0 2.3 1.3 4.1 3 1.8 1.6 3.7 3 4.3 3 0.5 0 1.9 0.8 3 1.8 1 0.9 3.3 2.4 4.9 3.2 1.7 0.8 3.2 1.8 3.5 2.1 0.5 0.7 8.1 4.6 14.1 7.4 7.3 3.3 14.6 4.9 24.5 5.2 9.1 0.4 10.6 0.2 15.5 -2.1 8.9 -4.1 14.3 -10.6 18 -21.5 2.4 -7.2 2.5 -19.5 0.3 -24 -2.8 -5.6 -8.7 -10.7 -17 -14.6 -4.3 -2 -8.7 -4.1 -9.6 -4.6 -1 -0.5 -2.7 -0.9 -3.8 -0.9 -1.1 0 -2 -0.4 -2 -1 0 -0.5 -1.3 -1 -2.8 -1 -1.6 0 -3.2 -0.3 -3.5 -0.6 -1.2 -1.2 -11.2 -4.3 -16 -5 -2.6 -0.4 -5 -1.1 -5.3 -1.5 -0.3 -0.5 -1.6 -0.9 -2.9 -0.9 -1.3 0 -2.7 -0.4 -3 -1 -0.3 -0.5 -1.9 -1 -3.6 -1 -1.6 0 -2.9 -0.4 -2.9 -1 0 -0.5 -0.7 -1 -1.6 -1 -2.4 0 -14.6 -6.2 -17.2 -8.7 -2.1 -2.1 -2.2 -2.5 -1.1 -9.5 2.8 -18.2 -3.7 -45.1 -17.6 -72.3 -3.9 -7.7 -9.1 -17.1 -11.4 -20.8 l-4.4 -6.8 1.9 -4.2 c3.6 -7.9 10.6 -17.6 18 -25.1 3.8 -3.7 9.4 -8.6 10 -8.6 0.4 0 1.7 -0.9 2.8 -1.9 4.9 -4.6 23.3 -12.4 35.1 -14.9 16.1 -3.5 45 -4 64 -1.2 5.6 0.9 35.7 1.3 101.3 1.6 60.7 0.3 93.2 0.8 93.2 1.4 0 0.9 2.4 2.2 12.2 6.4 2 0.9 4.2 1.6 4.9 1.6 2.2 0 -2.1 2.4 -8.6 5 -8 3.1 -8.5 3.6 -8.5 8.1 0 2.8 0.4 3.9 1.5 3.9 0.9 0 7.5 -2.5 14.7 -5.5 7.3 -3.1 13.8 -5.3 14.5 -5.1 0.8 0.3 1.3 2.2 1.3 4.4 0 4.4 1.4 6.2 4.7 6.2 3 0 4.7 -4.1 3.8 -9.6 -0.7 -5 -3.1 -7.4 -11 -10.9 -13.4 -5.8 -13.8 -5.4 5.3 -5.4 l17.2 -0.1 0.2 34 c0 18.7 0.1 34.6 0.2 35.3 0.1 0.8 -2.6 1.3 -9.4 1.5 -12 0.4 -18 -0.4 -18 -2.4 0 -0.8 -1.6 -2.2 -3.5 -3 -6.3 -2.6 -12.7 -1.4 -17.5 3.1 -2.2 2.1 -3.6 2.5 -11 2.7 l-8.5 0.3 -0.5 115.5 -0.5 115.5 -41.5 0 -41.5 0 -0.5 -113.5 -0.5 -113.5 -28.8 0 -28.9 0 -2.9 3.2 c-1.6 1.8 -3.1 3.3 -3.5 3.3 -0.5 0 -10.4 -8.2 -14.4 -11.9 -2.6 -2.4 -11.6 -7.9 -17.2 -10.5 -20.2 -9.2 -38.9 -6.9 -53 6.5 -13.6 13.1 -9.2 29.2 10.7 38.8 3.9 1.8 7.8 3.7 8.7 4.2 1 0.5 2.2 0.9 2.8 0.9 0.6 0 2.9 0.8 5.3 1.9 2.3 1 6.5 2.5 9.2 3.4 9.1 2.8 27.8 9.7 36.5 13.4 5.6 2.4 19.1 9.4 20 10.3 0.3 0.3 2.1 1.7 4 3 7.3 5.1 13.5 11.2 17.7 17.3 1.5 2.3 3.1 4.4 3.4 4.7 0.9 0.8 3.9 7.1 5.9 12.5 8 21.2 3.7 54.5 -10.8 84.1 -7.4 15.3 -19.4 29 -33.2 38 -8.8 5.8 -12.7 7.7 -23 11.2 -9 3.1 -13.1 4.1 -21.3 5.2 -9.3 1.2 -32.7 1.1 -41.2 -0.1z m276.2 -255 c5 -3.1 6.6 -7 6 -14.6 -0.5 -6.7 0 -7.4 2.8 -4.3 1.5 1.7 1.7 3 1.1 9.4 -0.6 6.8 -0.5 7.6 1.3 8.5 3.4 1.9 4.7 1.2 5.9 -2.6 3.7 -12.5 1.8 -21.3 -5.5 -25.1 -1.4 -0.8 -7.9 -1.2 -17.7 -1.2 l-15.6 0 0 2.9 c0 1.6 0.6 3.6 1.4 4.3 1.1 1.2 1.1 1.7 0 3.3 -1.7 2.3 -1.7 10 -0.1 13.7 3.2 7.2 13.4 10 20.4 5.7z"/>
      <path
        d="M1011.2 56.2 c-2.3 -1.5 -2.7 -8 -0.7 -10.2 2.3 -2.5 6.7 -2.6 8.8 -0.2 2.1 2.3 2.2 7.6 0.1 9.6 -1.7 1.7 -6.1 2.1 -8.2 0.8z"/>
      <path
        d="M574.6 317.7 c-3.3 -5.1 -7.8 -15.8 -7.2 -17.2 0.3 -0.9 1.8 -1.5 3.5 -1.5 1.7 0 3.1 -0.6 3.5 -1.5 0.9 -2.4 7.1 -4.7 9.8 -3.6 3.1 1.2 4.3 2.7 7.9 10.1 2.4 5 2.8 6.5 1.7 7.1 -2.6 1.7 -3.9 0.8 -6.2 -4.1 -1.3 -2.7 -2.9 -5.6 -3.6 -6.5 -2.8 -3.4 -9 -0.4 -9 4.3 0 1.8 1.8 6.5 4.6 12.2 0.1 0.4 -0.6 1.1 -1.6 1.8 -1.7 1 -2.2 0.8 -3.4 -1.1z"/>
      <path
        d="M434.2 316.9 c-2.2 -0.8 -2.1 -1 4.5 -14.4 3.7 -7.4 7.1 -13.5 7.5 -13.5 0.5 0 1.7 0.9 2.8 2 1.1 1.1 3.1 2 4.4 2 1.4 0 4 1.4 6 3.4 2.9 2.7 3.6 4.1 3.6 7.1 0 8 -6.9 13.7 -14 11.6 -2.1 -0.6 -4.3 -1.8 -5 -2.6 -1.9 -2.3 -3.3 -1.8 -5.5 1.9 -1.7 2.9 -2.3 3.3 -4.3 2.5z m21.5 -8.5 c2 -2 2.4 -3.2 1.9 -5.6 -1.4 -6.9 -8.9 -7.9 -12.1 -1.7 -2 3.8 -1.9 4.6 1 7.4 3.1 3.2 5.9 3.2 9.2 -0.1z"/>
      <path
        d="M299.8 313.2 c-0.9 -0.2 -1.8 -1.7 -2.1 -3.5 -1 -6.2 -2.8 -19.4 -4.8 -36.2 -1.2 -9.3 -2.5 -19.7 -2.9 -23 -0.5 -3.3 -1.8 -13.6 -3 -23 -1.1 -9.3 -3.6 -28.9 -5.5 -43.5 -1.8 -14.6 -4.4 -34.9 -5.6 -45.2 -1.6 -13.8 -2.6 -18.8 -3.5 -18.8 -1.3 0 -2.9 4.9 -9.8 28.5 -3.1 11 -8.2 28.8 -10.6 37.5 -1 3.6 -6.4 22.5 -12 42 -16.4 57.3 -18.1 63.2 -19.6 69 -0.8 3 -2.2 7.6 -3 10.3 l-1.6 4.7 -27.8 0 -27.9 0 -1.1 -4.2 c-1.2 -4.4 -5.4 -18.8 -11.6 -39.8 -1.9 -6.3 -4.6 -15.5 -5.9 -20.5 -1.4 -4.9 -3.4 -11.7 -4.5 -15 -1.1 -3.3 -2.9 -9.1 -3.9 -13 -3.2 -11.4 -9.8 -32.5 -12.7 -40.5 -1.5 -4.1 -3 -9.5 -3.5 -12 -0.4 -2.5 -1.4 -6.7 -2.2 -9.5 -0.9 -2.7 -3.2 -11.2 -5.3 -18.7 -3.4 -12.3 -4 -13.8 -6 -13.8 -2.3 0 -2.9 2.7 -5.4 28 -0.6 5.8 -1.5 12.8 -2.1 15.5 -0.8 4.6 -3.2 21.6 -5.9 43 -0.6 5 -2.2 17.3 -3.6 27.5 -1.3 10.2 -3.8 29.3 -5.5 42.5 -1.7 13.2 -3.4 25.6 -3.8 27.5 l-0.7 3.5 -23.7 0.3 -23.7 0.2 0 -2.9 c0 -2.9 -0.1 -2.9 -8.7 -4.2 -9.3 -1.4 -12.3 -3.1 -12.3 -7.3 0 -4.5 2.1 -5.1 12.8 -3.8 10.8 1.4 11.2 1.2 11.2 -5 0 -3.7 -0.1 -3.8 -3.7 -3.8 -5.5 0 -14.6 -2.7 -16 -4.7 -1.8 -2.3 -1.6 -3.7 0.5 -6.3 1.8 -2.3 1.9 -2.3 11.5 -1 5.3 0.8 9.9 1.1 10.3 0.8 0.3 -0.4 0.8 -2.4 1.1 -4.6 l0.5 -4 -7.3 -1.3 c-4.1 -0.7 -10.2 -1.3 -13.6 -1.3 l-6.1 -0.1 0.4 -3 c0.3 -1.6 0.7 -4 1 -5.3 l0.5 -2.3 3.3 2.6 c2.7 2.1 4.4 2.5 9.8 2.5 5.9 0 6.8 -0.3 10 -3.2 7.9 -7.2 7.7 -21.2 -0.4 -27.1 -3.3 -2.5 -12.5 -3.5 -15.7 -1.7 -2.7 1.4 -3.5 0.8 -2.6 -1.9 0.3 -1.2 1.5 -2.1 2.5 -2.1 0.9 0 2 -0.8 2.2 -1.8 0.5 -1.7 1.2 -1.8 5.9 -1.1 10.3 1.4 13.4 1.1 16.2 -1.7 4.5 -4.5 4.8 -14.4 0.4 -14.4 -3 0 -4.3 1.1 -5 4.1 -0.9 3.6 -2.2 3.9 -9.3 2.5 -5.5 -1.1 -5.9 -1.4 -5.6 -3.8 0.2 -1.4 -0.4 -3.2 -1.2 -4.1 -1.8 -1.7 -2.1 -5.3 -0.6 -6.2 0.5 -0.3 6.4 0.4 13.1 1.5 6.6 1.2 12.2 2 12.4 1.8 0.2 -0.1 0.6 -2.3 1 -4.8 l0.7 -4.6 -9.4 -1.3 c-13.9 -1.9 -16.3 -2.5 -16.6 -4.3 -0.4 -1.8 4.4 -4.8 7.6 -4.8 3.7 0 18.5 -4.1 19.9 -5.5 0.8 -0.8 1.7 -3 2 -4.9 0.5 -3.3 0.3 -3.5 -6.8 -8.3 -4.1 -2.7 -9.5 -6.2 -12.1 -7.7 -2.7 -1.5 -4.8 -3.3 -4.8 -4 0 -0.6 1.2 -1.9 2.7 -2.8 2.5 -1.5 2.8 -2.2 2.8 -7.3 0 -4.4 0.4 -6 1.9 -7.1 3.3 -2.3 3.7 -1.7 3 4.5 -0.8 7.2 -0.1 10.4 2.8 13.1 2.3 2.1 9.8 2.9 9.8 1 0 -0.5 0.6 -1 1.4 -1 2.1 0 4.9 -9.3 4.2 -13.5 -0.4 -1.9 -0.2 -3.6 0.4 -4 0.5 -0.3 1 -2.3 1 -4.5 0 -3.8 0 -3.8 -4.7 -4.4 -2.7 -0.3 -8.3 -0.8 -12.5 -1.2 -6.8 -0.6 -7.8 -0.9 -7.8 -2.5 0 -1.1 1.1 -2.5 2.5 -3.1 1.4 -0.6 2.5 -1.7 2.5 -2.3 0 -0.9 1.6 -0.9 6.1 -0.2 7.7 1.1 14.8 0.2 15.6 -2.1 0.4 -0.9 1.1 -2 1.7 -2.4 0.5 -0.4 1 -3.1 1.1 -6 0 -4.8 -0.2 -5.3 -2.3 -5.6 -3 -0.4 -5.2 1.4 -5.2 4.4 0 3 -2.4 3.7 -9 2.4 -2.9 -0.5 -5.4 -1 -5.6 -1 -0.2 0 -0.4 -1.3 -0.4 -2.9 0 -1.6 -0.7 -3.6 -1.5 -4.5 -1 -1 -1.3 -2.4 -0.9 -4.1 0.5 -2.1 1.2 -2.5 4.4 -2.5 2.2 0 4.1 0.4 4.4 0.9 0.3 0.4 2.9 1.1 5.8 1.5 2.9 0.3 6.7 0.9 8.4 1.2 2.9 0.6 3.1 0.4 3.7 -3.1 0.3 -2 0.4 -4.2 0.1 -4.9 -0.3 -0.8 -4 -1.8 -9.2 -2.5 -16.2 -2.2 -15.2 -1.9 -15.2 -5.1 0 -5.7 0.8 -6.2 5.1 -3.3 3.3 2.2 4.7 2.5 9.9 2.1 8.5 -0.6 12.9 -5 14.3 -14.3 1 -6.2 -0.8 -10.9 -5.5 -15 -3.7 -3.1 -4.8 -3.5 -9.5 -3.5 -3 0 -6.2 0.4 -7.2 0.9 -1.6 0.9 -1.7 0.6 -1.2 -2.7 l0.6 -3.7 5 0.1 c2.8 0 8.3 0.6 12.4 1.2 6 1 7.6 1 8.3 0 1 -1.6 1 -7.5 0 -8.2 -0.4 -0.2 -4.3 -0.9 -8.7 -1.5 -6 -0.8 -8.4 -1.6 -9.7 -3.2 -2.3 -2.7 -2.3 -5.1 0.1 -8 1.8 -2.3 1.9 -2.3 11.1 -1 5.1 0.7 9.6 0.9 10 0.4 1.9 -1.9 2.1 -6 0.5 -7.7 -1.5 -1.5 0.3 -1.6 25.2 -1.6 l26.9 0 2.2 6.8 c1.2 3.7 4.4 14.1 7.1 23.2 7.6 25.5 17.7 58.5 21 69 1.7 5.2 3.1 10.1 3.1 10.8 0 0.7 0.4 2 0.9 3 0.5 0.9 2.2 6.2 3.7 11.7 1.5 5.5 3.3 11.4 4 13 0.6 1.7 2.2 6.8 3.4 11.5 1.3 4.7 2.7 8.9 3.1 9.5 0.5 0.5 0.9 1.8 0.9 3 0.1 1.1 2 8.3 4.4 16 3.6 11.3 4.8 14.1 6.4 14.3 1.4 0.2 2.1 -0.4 2.6 -2.5 0.4 -1.5 2 -7.1 3.6 -12.3 1.6 -5.2 4.8 -16 7.1 -24 2.3 -8 5.8 -20.1 7.9 -27 2.1 -6.9 6.2 -20.6 9 -30.5 2.9 -9.9 6.2 -21.4 7.5 -25.5 1.2 -4.1 3 -10.2 3.9 -13.5 0.9 -3.3 3.2 -10.9 5.1 -17 1.8 -6 5.2 -17.4 7.6 -25.2 l4.2 -14.3 38.7 0 38.7 0 1.2 5.7 c0.6 3.2 2 11.9 3.2 19.3 1.1 7.4 3.6 22.5 5.4 33.5 l3.3 20 -3.3 7 c-16.9 35.7 -19.3 85.2 -6 126 1.5 4.4 3.4 9.5 4.4 11.5 1 1.9 2.6 5.3 3.5 7.5 3.5 7.9 15 23.8 23.7 32.6 l8.9 9 2.5 15.2 c1.4 8.3 2.5 15.7 2.5 16.4 0 1 -7.8 1.3 -35.8 1.5 -19.7 0.2 -36.6 0.2 -37.4 0z"/>
      <path
        d="M1004 306 c-0.6 -1.1 -2.1 -2 -3.5 -2 -1.5 0 -2.6 -0.7 -3 -2 -1.1 -3.3 0.2 -5.6 3.2 -5.5 2.2 0 2.8 -0.6 3.5 -3.3 0.7 -2.7 1.3 -3.3 3.1 -3 1.5 0.2 2.3 1.2 2.7 3.3 0.5 2.8 0.8 3 5.4 3.3 7.4 0.5 9.6 -0.3 9.6 -3.6 0 -1.6 0.8 -3.2 2 -3.9 1.6 -1.1 2.1 -1 3 0.6 2.3 4.4 0 10.9 -4.5 12.9 -1.4 0.7 -5.3 1.2 -8.5 1.2 -4.9 0 -6.1 0.3 -7 2 -0.6 1.1 -1.9 2 -3 2 -1.1 0 -2.4 -0.9 -3 -2z"/>
      <path
        d="M601.5 299.7 c-8 -11.4 -8.8 -12.9 -7.1 -14.6 1.5 -1.4 1.8 -1.4 3.4 0.4 1 1.1 4 5 6.5 8.6 4.4 6.3 4.5 6.7 2.8 8.3 -1 0.9 -1.9 1.6 -2.2 1.6 -0.2 -0.1 -1.7 -2 -3.4 -4.3z"/>
      <path
        d="M417.9 294.8 l-4.1 -4.2 -2.8 3.4 c-2.4 3 -3 3.2 -4.4 2.1 -0.9 -0.7 -1.6 -1.7 -1.6 -2.2 0 -0.7 10.7 -14.6 13.7 -17.7 0.7 -0.7 1.3 -1.7 1.3 -2.2 0 -2.1 3.6 -2 5.5 0.2 1.1 1.3 3.3 3 4.9 3.8 3.2 1.6 6.6 6.5 6.6 9.3 0 2.5 -2.8 7.7 -5.4 9.9 -1.2 0.9 -3.8 1.7 -5.9 1.8 -3.1 0 -4.4 -0.7 -7.8 -4.2z m11.3 -3.5 c2 -1.8 2.4 -7.3 0.6 -9.1 -0.7 -0.7 -2.8 -1.2 -4.8 -1.2 -2 0 -4.1 0.5 -4.8 1.2 -1.6 1.6 -1.6 8 0 9.6 1.7 1.7 6.8 1.5 9 -0.5z"/>
      <path
        d="M497 291.5 c-9.4 -1.5 -21.2 -4.5 -22.4 -5.6 -0.6 -0.5 -1.7 -0.9 -2.6 -0.9 -2.3 0 -21.7 -9.7 -28.4 -14.3 -8.7 -5.9 -9.2 -6.3 -20.1 -17.2 -10.7 -10.6 -17.6 -19.6 -22.1 -28.5 -1.5 -3 -3 -5.7 -3.4 -6 -1.4 -1.1 -9 -23.2 -10.7 -31.1 -2.8 -12.9 -2.5 -44.1 0.6 -56.4 1.2 -4.9 2.6 -9.9 3.1 -11 0.5 -1.1 2.1 -5.1 3.6 -9 2.6 -6.8 11.4 -23.3 13.8 -25.8 0.6 -0.6 2.8 -3.4 4.8 -6.2 7.1 -9.8 27.6 -27.8 37.3 -32.7 1.7 -0.8 5.7 -2.9 9 -4.5 3.3 -1.7 8.9 -4.1 12.5 -5.3 3.6 -1.2 7.4 -2.5 8.5 -3 1.1 -0.5 3.5 -1.1 5.3 -1.4 l3.2 -0.5 0 16.9 0 16.9 -3.2 1.4 c-1.8 0.8 -4.9 2 -6.8 2.7 -19.5 7.2 -39.9 26 -50.2 46.4 -8.6 17 -12.5 39.1 -9.8 56.1 2.6 17.4 6.7 28.5 15.5 42 5.8 9.1 18.8 22.8 24.2 25.5 1.5 0.8 3.3 2 3.8 2.6 1.8 2.1 14.3 8.5 21.3 10.9 18.2 6.3 46.8 6.7 62.4 0.9 10.8 -4 18.8 -7.7 18.8 -8.6 0 -0.5 0.5 -0.8 1.2 -0.8 3.5 0 22.1 -15.9 27.3 -23.4 1.1 -1.5 2.5 -3.3 3 -4 13.5 -15.8 21.4 -48.8 17.1 -72.1 -2.7 -14.4 -8.6 -29.9 -15 -38.9 -3.4 -4.9 -11.8 -14.9 -14.4 -17.1 -1.3 -1.1 -3.8 -3.3 -5.6 -5 -6.8 -6.1 -25.8 -16.1 -34.5 -18 l-3.1 -0.7 0 -17.3 0 -17.3 2.3 0.5 c7.8 1.9 16.1 4.4 21.6 6.7 3.6 1.4 7 2.6 7.8 2.6 0.7 0 1.3 0.5 1.3 1 0 0.6 0.4 1 1 1 0.9 0 18 9.8 19 11 0.3 0.3 3 2.5 6 5 11.5 9.3 22.6 22.3 31.3 36.7 11.6 19.1 18.7 48.7 17.2 71.3 -0.7 11.2 -3.9 28.4 -6.5 35.5 -4.2 11.5 -5.8 15.2 -8.3 19.5 -1.5 2.5 -3.8 6.7 -5.2 9.3 -1.4 2.6 -3.3 5.6 -4.3 6.5 -0.9 1 -2.6 3.1 -3.7 4.6 -1.1 1.5 -5.9 6.7 -10.7 11.5 -14.1 14.3 -34.2 26.9 -51.3 32.1 -2.2 0.7 -5.1 1.6 -6.5 2.1 -2.4 0.8 -6.9 1.6 -19.4 3.9 -7.6 1.3 -26 1.1 -35.6 -0.5z"/>
      <path
        d="M612.9 286 c-3.4 -3.6 -5.3 -4.9 -7 -4.8 -2 0.3 -2.4 -0.3 -3.1 -4.2 -1 -5.7 0.1 -6.6 7.1 -6.1 4.9 0.3 5.2 0.5 4.6 2.5 -0.3 1.1 -0.8 2.8 -1.1 3.6 -0.7 2.4 4.9 8 8 8 1.4 0 2.6 -0.4 2.6 -1 0 -1.3 1.1 -1.3 3 0 1.3 0.9 1 1.5 -1.8 4 -4.6 4.2 -6.8 3.8 -12.3 -2z"/>
      <path
        d="M637.6 284.3 c-0.4 -0.9 0 -2.3 0.9 -3.3 0.8 -0.9 1.5 -2.8 1.5 -4.1 0 -2.3 -0.8 -2.7 -9.2 -5.1 -5.1 -1.4 -10.6 -2.9 -12.2 -3.3 l-2.9 -0.6 2.4 -2.4 2.4 -2.4 5.9 1.9 c3.3 1.1 6.3 2 6.8 2 1.6 0 0.7 -4.6 -1.7 -8.5 -2.7 -4.5 -3.1 -6.5 -1.3 -8.3 0.9 -0.9 1.7 -0.2 3.6 3.1 6 10.2 11.2 21.3 11.2 23.7 0 4.8 -6.1 10.8 -7.4 7.3z"/>
      <path
        d="M1010.5 283.9 c-3.8 -1.9 -6.9 -7.7 -6.9 -12.7 0 -7.5 4.6 -12.6 12 -13.4 l2.9 -0.3 0.3 9.8 c0.2 8.5 0.5 9.7 2 9.7 1 0 2.3 -0.5 3 -1.2 1.5 -1.5 1.6 -10 0.2 -11.4 -0.7 -0.7 -0.4 -1.6 0.8 -2.7 2.3 -2.1 3.5 -1 5.1 4.7 1.4 5.3 -0.2 11.6 -4 15.2 -2.2 2.1 -4 2.8 -8.1 3.1 -2.9 0.1 -6.2 -0.2 -7.3 -0.8z m4.5 -12.9 c0 -5.7 -0.1 -6 -2.4 -6 -1.7 0 -2.7 0.9 -3.6 3 -1.7 4.2 0.2 9 3.6 9 2.3 0 2.4 -0.3 2.4 -6z"/>
      <path
        d="M587.3 280.4 c-0.7 -1.8 0.6 -4.5 2.4 -5.1 0.6 -0.2 1.8 0.3 2.7 1.2 1.2 1.2 1.3 2.1 0.6 3.6 -1.3 2.3 -4.8 2.5 -5.7 0.3z"/>
      <path
        d="M397.4 274.6 c-1.7 -1.4 -3.9 -4.3 -4.9 -6.6 -1.7 -3.8 -1.7 -4.3 -0.2 -7.5 1.9 -3.9 6.9 -7.5 10.5 -7.5 3.4 0 7.4 2.6 10 6.6 3.7 5.7 2.6 11.2 -3.2 15.2 -4.2 2.9 -8.3 2.8 -12.2 -0.2z m9.6 -4.6 c2.6 -1.4 3.4 -5.7 1.5 -8.6 -3.4 -5.3 -13.5 -1.5 -12 4.4 0.4 1.5 1.1 3.3 1.7 3.9 1.2 1.5 6.2 1.7 8.8 0.3z"/>
      <path
        d="M1011.5 252 c-8.1 -3.3 -10.6 -17.1 -4.2 -23 l2.1 -2 1.4 2.6 c1.2 2.2 1.1 2.8 -0.2 4.3 -1.9 2.1 -2.1 7.1 -0.3 9.5 1.9 2.5 9 3.3 12.2 1.2 1.9 -1.3 2.5 -2.5 2.5 -5.4 0 -2.1 -0.6 -4.7 -1.4 -5.7 -1 -1.4 -1.1 -2.5 -0.3 -4.2 l1 -2.3 2.3 2.1 c6.1 5.7 5.2 15.9 -1.9 21.3 -3.5 2.7 -9 3.4 -13.2 1.6z"/>
      <path
        d="M20.4 248 c-1.1 -0.4 -2.7 -2.2 -3.4 -4 -1.2 -2.8 -1.1 -3.4 0.7 -5.8 1.5 -2 3 -2.8 5.9 -2.9 4.7 -0.3 7.2 1.4 8 5.5 0.5 2.4 0.1 3.6 -1.9 5.6 -2.7 2.6 -5.5 3.1 -9.3 1.6z"/>
      <path
        d="M993.2 217.8 l0.3 -3.3 5.8 0.1 5.9 0.1 -0.8 -3.6 c-1.2 -5.7 -0.7 -9.9 1.6 -12.9 2.6 -3.2 5.1 -3.9 15.2 -4.1 8.2 -0.1 10.1 1 9.1 5 -0.5 1.7 -1.6 1.9 -8.5 1.9 -10.3 0 -11.8 0.8 -11.8 6.5 0 5.6 1.5 6.5 10.7 6.5 7.2 0 9 0.6 9.3 3 0.6 4 0.6 4 -18.6 4 l-18.5 0 0.3 -3.2z"/>
      <path
        d="M1004.3 181 c0.3 -2.7 0.1 -6.3 -0.4 -8 -1.5 -4.2 0.5 -9.7 4.5 -12.1 2.5 -1.5 5 -1.9 12.4 -1.9 l9.2 0 0 3.5 0 3.5 -8.7 0 c-4.9 0 -9.4 0.4 -10.2 0.9 -0.7 0.5 -1.4 2.7 -1.5 5 -0.1 5.8 1.9 7 12.2 7.1 l8.2 0 0 3.5 0 3.5 -13.1 0 -13.2 0 0.6 -5z"/>
      <path
        d="M24.3 169.3 c0.3 -1 0.8 -3.5 1.2 -5.5 0.3 -2.1 1.1 -3.8 1.8 -3.8 1.5 0 12 7 11.4 7.6 -0.6 0.6 -11.5 3.4 -13.3 3.4 -1 0 -1.4 -0.6 -1.1 -1.7z"/>
      <path
        d="M507.9 151.2 c-3.2 -1.5 -6.7 -4.9 -8.5 -8.2 -1.8 -3.3 -1.9 -7 -2.2 -69.9 -0.2 -53.1 0 -66.6 1 -67.3 1.5 -0.9 30.8 -1.1 33.2 -0.2 1.4 0.6 1.6 7.4 1.6 67 0 73.6 0.2 70.8 -6.5 76 -3.2 2.4 -4.9 2.9 -10.4 3.1 -3.6 0.1 -7.3 -0.1 -8.2 -0.5z"/>
      <path
        d="M1009.3 149.5 c-1.7 -1.4 -3.9 -4.5 -4.8 -6.9 -4.3 -11.2 6.3 -22.6 17.2 -18.5 4.4 1.7 7.1 5.2 8.4 10.7 1.1 5.2 -1 11.1 -5.3 14.7 -4.1 3.5 -11 3.5 -15.5 0z m13.9 -6.2 c1.8 -1.7 2.5 -7.7 1 -10 -0.9 -1.4 -5.6 -3.3 -8.3 -3.3 -1.1 0 -3.1 1.1 -4.4 2.5 -3.1 3 -3.3 7.7 -0.5 10.5 2.5 2.5 9.5 2.7 12.2 0.3z"/>
      <path
        d="M45 140.5 c-1.3 -1.6 -0.5 -9.5 1 -9.5 1.6 0 4 3.1 4 5.1 0 2.4 -1.7 5.9 -2.9 5.9 -0.5 0 -1.4 -0.7 -2.1 -1.5z"/>
      <path
        d="M993.7 116.3 c-0.4 -0.3 -0.7 -1.9 -0.7 -3.4 0 -2.6 0.3 -2.8 4.3 -3.1 2.3 -0.2 10.6 -0.2 18.5 0 l14.2 0.3 0 3.5 0 3.4 -17.8 0 c-9.8 0 -18.2 -0.3 -18.5 -0.7z"/>
      <path
        d="M1016.5 103.4 c-0.5 -0.1 -2.2 -0.5 -3.6 -0.8 -3.7 -0.8 -7.7 -5.2 -8.9 -9.7 -2.1 -7.7 3 -16.8 10 -18.3 4.5 -0.8 11.8 1.2 12.5 3.5 0.4 1 1 1.9 1.4 1.9 1.5 0 3.4 7.9 2.8 11.6 -1 6 -9.5 13 -14.2 11.8z m6.5 -9.4 c3.2 -3.2 2.7 -8.4 -1.1 -11 -5.5 -4 -12.9 -0.7 -12.9 5.7 0 4.6 2.9 7.3 8 7.3 2.7 0 4.7 -0.7 6 -2z"/>
      <path
        d="M49.3 65 c-2.7 -1.6 -3.3 -2.6 -3.3 -5.2 0.1 -4.8 2.2 -7 6.9 -7.2 7.5 -0.2 11 7.3 5.8 12.2 -2.9 2.7 -5.3 2.8 -9.4 0.2z"/>
    </g>
  </svg>
);

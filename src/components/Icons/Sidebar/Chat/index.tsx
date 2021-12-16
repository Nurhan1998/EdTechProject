/*eslint-disable max-len*/

import { IIconProps } from 'components/Icons/types';

const Chat = ({ width = 20, height = 20 }: IIconProps): JSX.Element => (
  <svg width={width} height={height} viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.0886 15.6615C12.1375 15.7103 12.1375 15.7895 12.0886 15.8383C12.0398 15.8872 11.9606 15.8872 11.9118 15.8383C11.8629 15.7895 11.8629 15.7103 11.9118 15.6615C11.9352 15.638 11.967 15.6249 12.0002 15.6249C12.0334 15.6249 12.0652 15.638 12.0886 15.6615"
      stroke="#85888B" strokeLinecap="round" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd"
      d="M12.0001 7.99664C7.02802 7.99664 2.99634 11.3567 2.99634 15.4969C3.07149 17.9952 4.44934 20.2717 6.62785 21.497C6.41145 22.0851 6.11055 22.6385 5.73462 23.1398C5.52713 23.4428 5.53226 23.8434 5.74744 24.1409C5.96263 24.4385 6.34149 24.5688 6.69418 24.4666C7.89701 24.1164 9.02916 23.5581 10.0393 22.8171C10.6858 22.9383 11.3423 22.9985 12.0001 22.9971C16.9722 22.9971 21.0038 19.637 21.0038 15.4969C21.0038 11.3567 16.9722 7.99664 12.0001 7.99664Z"
      stroke="#85888B" strokeLinecap="round" strokeLinejoin="round"/>
    <path
      d="M16.0901 15.6615C16.1389 15.7103 16.1389 15.7895 16.0901 15.8383C16.0413 15.8872 15.9621 15.8872 15.9132 15.8383C15.8644 15.7895 15.8644 15.7103 15.9132 15.6615C15.9367 15.638 15.9685 15.6249 16.0017 15.6249C16.0348 15.6249 16.0666 15.638 16.0901 15.6615"
      stroke="#85888B" strokeLinecap="round" strokeLinejoin="round"/>
    <path
      d="M8.08693 15.6615C8.13576 15.7103 8.13576 15.7895 8.08692 15.8383C8.03809 15.8872 7.95891 15.8872 7.91007 15.8383C7.86124 15.7895 7.86124 15.7103 7.91007 15.6615C7.93352 15.638 7.96533 15.6249 7.9985 15.6249C8.03167 15.6249 8.06347 15.638 8.08693 15.6615"
      stroke="#85888B" strokeLinecap="round" strokeLinejoin="round"/>
    <g filter="url(#filter0_d_33_322)">
      <rect x="17" y="5" width="6" height="6" rx="3" fill="#49A057"/>
      <rect x="16.5" y="4.5" width="7" height="7" rx="3.5" stroke="white"/>
    </g>
    <defs>
      <filter id="filter0_d_33_322" x="10" y="0" width="20" height="20" filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="3"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_33_322"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_33_322" result="shape"/>
      </filter>
    </defs>
  </svg>
);
export default Chat;

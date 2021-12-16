/*eslint-disable max-len*/
import { useEffect, useState } from 'react';

import { IIconProps } from 'components/Icons/types';

const MostBell = ({ width = 26, height = 26 }: IIconProps): JSX.Element => {
  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    setState(true);
  }, []);


  return (
    <svg width={width} height={height} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M18.5024 18.3612C19.5498 18.3612 20.3998 17.5139 20.4031 16.4664V16.4664V16.4664C20.4025 15.9335 20.1897 15.4227 19.8119 15.0468L18.5524 13.7863V10.0418C18.5521 8.56992 17.9668 7.15854 16.9254 6.11845C15.884 5.07836 14.4719 4.49486 13.0001 4.49645V4.49645C9.93848 4.49811 7.4573 6.98018 7.45675 10.0418V13.7833L6.19723 15.0438C5.8191 15.4196 5.60602 15.9304 5.60498 16.4634V16.4634V16.4634C5.60829 17.5109 6.45833 18.3582 7.50577 18.3582L18.5024 18.3612Z"
        stroke="#232323" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.5205 21.5035H14.4787" stroke="#232323" strokeLinecap="round" strokeLinejoin="round"/>
      {state && (
        <>
          <g filter="url(#filter0_d_33_301)">
            <rect x="17" y="5" width="6" height="6" rx="3" fill="#49A057"/>
            <rect x="16.5" y="4.5" width="7" height="7" rx="3.5" stroke="white"/>
          </g>
          <defs>
            <filter id="filter0_d_33_301" x="10" y="0" width="20" height="20" filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"/>
              <feOffset dy="2"/>
              <feGaussianBlur stdDeviation="3"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_33_301"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_33_301" result="shape"/>
            </filter>
          </defs>
        </>
      )}
    </svg>
  );
};
export default MostBell;

/*eslint-disable max-len*/
import { IIconProps } from 'components/Icons/types';

const RusFlag = ({ width = 25, height = 25 }: IIconProps): JSX.Element => (
  <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <mask id="mask0_33_929" maskUnits="userSpaceOnUse" x="0" y="0" width="22"
        height="22">{/*style="mask-type:alpha"*/}
        <rect width="22" height="22" rx="11" fill="white"/>
      </mask>
      <g mask="url(#mask0_33_929)">
        <rect width="22" height="7" fill="white"/>
        <rect y="15" width="22" height="7" fill="#D11D2E"/>
        <rect y="7" width="22" height="8" fill="#307AF6"/>
      </g>
    </g>
  </svg>

);
export default RusFlag;

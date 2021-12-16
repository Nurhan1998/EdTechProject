/*eslint-disable max-len*/
import { IIconProps } from 'components/Icons/types';

const LogOut = ({ width = 20, height = 20 }: IIconProps): JSX.Element => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.0017 12H21.0038" stroke="#85888B" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.0032 14.0008L21.004 12L19.0032 9.99915" stroke="#85888B" strokeLinecap="round"
      strokeLinejoin="round"/>
    <path
      d="M20.0035 17.002V19.0029C20.0035 20.1083 19.1081 21.0037 18.0027 21.0037H5.99766C4.8922 21.0037 3.99683 20.1083 3.99683 19.0029V4.99705C3.99683 3.89159 4.8922 2.99622 5.99766 2.99622H18.0027C19.1081 2.99622 20.0035 3.89159 20.0035 4.99705V6.99788"
      stroke="#85888B" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.99899 10.9996V13.0004" stroke="#85888B" strokeLinecap="round" strokeLinejoin="round"/>
    <path
      d="M3.99683 18.9999C3.99683 20.4875 5.56248 21.4549 6.89203 20.7896L10.8937 18.7888C11.572 18.4487 12.0002 17.7564 12.0002 16.998V2.99622"
      stroke="#85888B" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

);
export default LogOut;

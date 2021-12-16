/*eslint-disable max-len*/
import { IIconProps } from 'components/Icons/types';

const Favorite = ({ width = 20, height = 20 }: IIconProps): JSX.Element => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M15.696 4C18.871 4 21 6.98 21 9.755C21 15.388 12.161 20 12 20C11.839 20 3 15.388 3 9.755C3 6.98 5.129 4 8.304 4C10.119 4 11.311 4.905 12 5.711C12.689 4.905 13.881 4 15.696 4Z"
      stroke="#85888B" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
export default Favorite;

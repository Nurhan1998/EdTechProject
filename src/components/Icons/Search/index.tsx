/*eslint-disable max-len*/
import { IIconProps } from 'components/Icons/types';

const Search = ({ width = 20, height = 20 }: IIconProps): JSX.Element => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.7138 6.8382C18.1647 9.28913 18.1647 13.2629 15.7138 15.7138C13.2629 18.1647 9.28913 18.1647 6.8382 15.7138C4.38727 13.2629 4.38727 9.28913 6.8382 6.8382C9.28913 4.38727 13.2629 4.38727 15.7138 6.8382"
      stroke="#85888B" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 19L15.71 15.71" stroke="#85888B" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
export default Search;

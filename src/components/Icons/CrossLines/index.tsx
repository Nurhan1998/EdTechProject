import { IIconProps } from 'components/Icons/types';

const CrossLines = ({ width= 24, height = 24 }: IIconProps): JSX.Element => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8L16 16" stroke="#232323" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 8L8 16" stroke="#232323" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
export default CrossLines;
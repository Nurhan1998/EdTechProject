/*eslint-disable max-len*/
import { IIconProps } from 'components/Icons/types';

const RightArrows = ({ width = 14, height = 14, color ='#232323' }: IIconProps): JSX.Element => (
  <svg width={width} height={height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.875 9.33329L10.2083 6.99996L7.875 4.66663" stroke={color} strokeWidth="0.823529" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.7915 9.91666L6.70817 7L3.7915 4.08333" stroke={color} strokeWidth="0.823529" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

);
export default RightArrows;

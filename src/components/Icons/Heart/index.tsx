/*eslint-disable max-len*/
import { IIconProps } from 'components/Icons/types';

interface IHeartProps extends  IIconProps {
    filled?: boolean;
    stroke?: string;
}
const Heart = ({ width = 15, height=13, filled, stroke }: IHeartProps): JSX.Element => {
  const fill: string = filled ? '#E5394B' : 'none';
  const color: string = stroke ? stroke : filled ?'#E5394B' :'#85888B';
  return (
    <svg width={width} height={height} viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.118 0.833344C12.367 0.833344 13.875 2.94418 13.875 4.9098C13.875 8.89984 7.61404 12.1667 7.5 12.1667C7.38596 12.1667 1.125 8.89984 1.125 4.9098C1.125 2.94418 2.63304 0.833344 4.882 0.833344C6.16762 0.833344 7.01196 1.47439 7.5 2.0453C7.98804 1.47439 8.83238 0.833344 10.118 0.833344Z" fill={fill} stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
export default Heart;
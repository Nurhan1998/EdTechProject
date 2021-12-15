/*eslint-disable max-len*/
import { IIconProps } from 'components/Icons/types';

const VideoChat = ({ width = 17, height = 17 }: IIconProps): JSX.Element => (
  <svg width={width} height={height} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M2.125 7.9977C2.125 9.89816 3.13083 11.5712 4.67429 12.626C4.67358 13.2316 4.675 14.0476 4.675 14.904L7.17612 13.6665C7.60396 13.7487 8.04596 13.7933 8.5 13.7933C12.0077 13.7933 14.875 11.2128 14.875 7.9977C14.875 4.78258 12.0077 2.20212 8.5 2.20212C4.99233 2.20212 2.125 4.78258 2.125 7.9977Z" stroke="#49A057" strokeLinecap="round" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M8.01326 6.17735L10.2764 7.5161C10.6022 7.70876 10.6022 8.18051 10.2764 8.37389L8.01326 9.71264C7.68105 9.90885 7.26172 9.66943 7.26172 9.2841V6.6066C7.26172 6.21985 7.68105 5.98043 8.01326 6.17735V6.17735Z" stroke="#49A057" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

);
export default VideoChat;

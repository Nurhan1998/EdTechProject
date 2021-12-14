/*eslint-disable max-len*/
import { IIconProps } from 'components/Icons/types';

const Profile = ({ width = 20, height = 20 }: IIconProps): JSX.Element => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12.0001" cy="12" r="9.00375" stroke="#85888B" strokeLinecap="round" strokeLinejoin="round"/>
    <path
      d="M16.0019 16.0016C15.8855 15.7089 15.705 15.446 15.4736 15.2323V15.2323C15.0838 14.8699 14.5713 14.6684 14.0391 14.6681H9.96235C9.4298 14.6684 8.91703 14.87 8.52676 15.2323V15.2323C8.2959 15.4465 8.11549 15.7093 7.99854 16.0016"
      stroke="#85888B" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12.0002" cy="10.2493" r="2.25094" stroke="#85888B" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

);
export default Profile;

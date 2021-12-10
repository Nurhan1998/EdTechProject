import { FC } from 'react';

import StudentAuthContainer from 'components/StudentAuthContainer';
import BusinessAuthContainer from 'components/BusinessAuthContainer';

interface IAuthLayoutProps {
  isStudent: boolean;
}

const AuthLayout: FC<IAuthLayoutProps> = ({ children, isStudent }) =>
  isStudent ? <StudentAuthContainer children={children}/> : <BusinessAuthContainer children={children}/>;

export default AuthLayout;

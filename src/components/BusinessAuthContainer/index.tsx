import { FC } from 'react';
import { useRouter } from 'next/router';

import { RESET, SIGN_UP } from 'configuration/urls';
import { EColors } from 'configuration/Colors';

import { Logo } from 'components/Icons/Logo/Logo';



const BusinessAuthContainer: FC = ({ children }) => {
  const router = useRouter();

  const handleClickAsStudent = (): void => {
    router.push(SIGN_UP);
  };

  const handleClickReset = (): void => {
    router.push(RESET);
  };

  return (
    <div className="bus-auth">
      <div className="bus-auth-container">
        <div className="bus-auth-container_header">
          <Logo width={170} height={50} color={EColors.MOST_BLUE}/>
          <p className="bus-auth-container_title"> Sign in</p>
        </div>
        <div className="bus-auth-container_body">
          {children}
        </div>
        <div className="bus-auth-container_footer">
          <span>Don't have an account?</span>
          <span>
            Sign Up as a&#160;
            <span
              onClick={handleClickAsStudent}
              className="dedicated"
            >
              Student
            </span>&#160;or&#160;
            <span className="dedicated" onClick={handleClickReset}>Reset</span>
            &#160;your password?
          </span>
        </div>
      </div>
    </div>
  );
};

export default BusinessAuthContainer;

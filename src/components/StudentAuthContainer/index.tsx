import { FC } from 'react';
import { useRouter } from 'next/router';

import { RESET, SIGN_UP } from 'configuration/urls';

import { Logo } from 'components/Icons/Logo/Logo';


const StudentAuthContainer: FC = ({ children }) => {
  const router = useRouter();

  const handleClickAsStudent = (): void => {
    router.push(SIGN_UP);
  };

  const handleClickReset = (): void => {
    router.push(RESET);
  };

  return (
    <div className="stud-auth">
      <div className="stud-auth-container">
        <div className="stud-auth-container_header">
          <Logo width={170} height={50}/>
          <p className="stud-auth-container_title"> Sign in</p>
        </div>
        <div className="stud-auth-container_body">
          {children}
        </div>
        <div className="stud-auth-container_footer">
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

export default StudentAuthContainer;

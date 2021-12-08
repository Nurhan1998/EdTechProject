import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';

import { RESET, SIGN_UP } from 'configuration/urls';

import { Logo } from 'components/Icons/Logo/Logo';


const AuthLayout: FC = ({ children }) => {
  const router = useRouter();
  const [isBusiness] = useState<boolean>(false);

  const handleClickAsStudent = (): void => {
    router.push(SIGN_UP);
  };

  const handleClickReset = (): void => {
    router.push(RESET);
  };

  return (
    <div
      className={cn('auth', {
        business: isBusiness,
        student: !isBusiness
      })}>
      <div
        className={cn('auth-container', {
          business: isBusiness,
          student: !isBusiness
        })}
      >
        <div className="auth-container_header">
          <Logo width={170} height={50} color={isBusiness ? '#014D7E' : '#06a34e'}/>
          <p
            className={cn('auth-container_title', {
              business: isBusiness,
              student: !isBusiness
            })}
          >Sign in</p>
        </div>
        <div className="auth-container_body">
          {children}
        </div>
        {router.pathname !== SIGN_UP &&
        (
          <div
            className={cn('auth-container_footer', {
              business: isBusiness,
              student: !isBusiness
            })}>
            <span>Don't have an account?</span>
            <span>
              Sign Up as a&#160;
              <span
                onClick={handleClickAsStudent}
                className={cn('dedicated', {
                  business: isBusiness,
                  student: !isBusiness
                })}
              >Student</span>
              &#160;or&#160;
              <span
                className={cn('dedicated', {
                  business: isBusiness,
                  student: !isBusiness
                })}
                onClick={handleClickReset}
              >Reset</span>
              &#160;your password?
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthLayout;

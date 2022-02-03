import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { EColors } from 'configuration/Colors';

import AuthLayout from 'components/Layout/Auth';
import Form from 'components/Form';
import { Button } from 'components/Button';

import { FORGOT_PASSWORD_FORM } from 'pages/forgot/form/constants';

import { forgotPasswordRequest } from 'store/users/actions';
import { makeSelectForgotPasswordFetching } from 'store/users/selectors';
import { makeSelectFormValues } from 'store/form/selectors';
import { initForm, removeForm } from 'store/form/actions';

import config from './form/config';


const ForgotPassword = (): JSX.Element => {
  const dispatch = useDispatch();
  const forgotPasswordFetching = useSelector(makeSelectForgotPasswordFetching);
  const formValues = useSelector(makeSelectFormValues(FORGOT_PASSWORD_FORM));
  const [isStudent] = useState(false);

  const getPassword = () => {
    const email = formValues.email as string;
    dispatch(forgotPasswordRequest({ email }));
  };

  useEffect(
    () => {
      dispatch(initForm({ form: FORGOT_PASSWORD_FORM, config }));
      return () => {
        dispatch(removeForm({ form: FORGOT_PASSWORD_FORM }));
      };
    },
    // Need to call this effect only once at mount
    // eslint-disable-next-line
    []
  );

  return (
    <AuthLayout isStudent={isStudent}>
      <Form
        name={FORGOT_PASSWORD_FORM}
        config={config}
      />
      <Button
        style={{ backgroundColor: isStudent ? EColors.MOST_GREEN : EColors.MOST_BLUE }}
        disabled={!!forgotPasswordFetching}
        onClick={getPassword}
      >
        Get password to Email
      </Button>
    </AuthLayout>
  );
};
export default ForgotPassword;

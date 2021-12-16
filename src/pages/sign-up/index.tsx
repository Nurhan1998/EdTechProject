import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { EColors } from 'configuration/Colors';

import { Button } from 'components/Button';
import Form from 'components/Form';
import AuthLayout from 'components/Layout/Auth';

import { makeSelectSignInFetching } from 'store/users/selectors';
import { initForm, removeForm } from 'store/form/actions';
import { signUpRequest } from 'store/users/actions';
import { TSignUp } from 'store/users/types';
import { makeSelectFormValues } from 'store/form/selectors';

import { SIGN_UP_FORM } from './form/constants';
import config from './form/config';


const SignUp = (): JSX.Element => {
  const dispatch = useDispatch();
  const signInFetching = useSelector(makeSelectSignInFetching);
  const formValues = useSelector(makeSelectFormValues(SIGN_UP_FORM));
  const [isStudent] = useState<boolean>(false);

  const signUp = (): void => {
    delete formValues.confirm_password;
    dispatch(signUpRequest(formValues as unknown as TSignUp));
  };

  useEffect(
    () => {
      dispatch(initForm({ form: SIGN_UP_FORM, config }));
      return () => {
        dispatch(removeForm({ form: SIGN_UP_FORM }));
      };
    },
    // Need to call this effect only once at mount
    // eslint-disable-next-line
    []
  );


  return (
    <AuthLayout isStudent={isStudent}>
      <Form
        name={SIGN_UP_FORM}
        config={config}
      />
      <Button
        style={{ backgroundColor: isStudent ? EColors.MOST_GREEN : EColors.MOST_BLUE }}
        disabled={signInFetching}
        onClick={signUp}
        text="Sign up"
      />
    </AuthLayout>
  );
};

export default SignUp;

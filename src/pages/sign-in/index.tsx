import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'components/Button';
import AuthLayout from 'components/AuthLayout';
import Form from 'components/Form';

import { makeSelectSignInFetching } from 'store/users/selectors';
import { initForm, removeForm } from 'store/form/actions';
import { selectFormValues } from 'store/form/selectors';
import { signInRequest } from 'store/users/actions';

import { SIGN_IN_FORM } from './form/constants';
import config from './form/config';


const SignIn = (): JSX.Element => {
  const dispatch = useDispatch();
  const signInFetching = useSelector(makeSelectSignInFetching);
  const formValues = useSelector(selectFormValues(SIGN_IN_FORM));

  const signIn = (): void => {
    const email = formValues.email as string;
    const password = formValues.password as string;
    dispatch(signInRequest({ email, password }));
  };

  useEffect(
    () => {
      dispatch(initForm({ form: SIGN_IN_FORM, config }));
      return () => {
        dispatch(removeForm({ form: SIGN_IN_FORM }));
      };
    },
    // Need to call this effect only once at mount
    // eslint-disable-next-line
    []
  );


  return (
    <AuthLayout>
      <Form
        name={SIGN_IN_FORM}
        config={config}
      />
      <Button
        disabled={signInFetching}
        onClick={signIn}
        text="Sign in"
      />
    </AuthLayout>
  );
};

export default SignIn;

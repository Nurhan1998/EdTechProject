import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { EColors } from 'configuration/Colors';

import { Button } from 'components/Button';
import Form from 'components/Form';
import AuthLayout from 'components/Layout/Auth';

import { makeSelectSignInFetching } from 'store/users/selectors';
import { initForm, removeForm } from 'store/form/actions';
import { makeSelectFormValues } from 'store/form/selectors';
import { signInRequest } from 'store/users/actions';

import { schema } from 'utils/validation/signIn';

import { SIGN_IN_FORM } from './form/constants';
import config from './form/config';


const SignIn = (): JSX.Element => {
  const dispatch = useDispatch();
  const signInFetching = useSelector(makeSelectSignInFetching);
  const formValues = useSelector(makeSelectFormValues(SIGN_IN_FORM));
  const [isStudent] = useState<boolean>(true);

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
    <AuthLayout isStudent={isStudent}>
      <Form
        validateSchema={schema}
        name={SIGN_IN_FORM}
        config={config}
      />
      <Button
        style={{ backgroundColor: isStudent ? EColors.MOST_GREEN : EColors.MOST_BLUE }}
        disabled={signInFetching}
        onClick={signIn}
      >
        Sign in
      </Button>
    </AuthLayout>
  );
};


export default SignIn;

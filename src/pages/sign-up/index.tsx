import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

import { Button } from 'components/Button';
import AuthLayout from 'components/AuthLayout';
import Form from 'components/Form';


import { makeSelectSignInFetching } from 'store/users/selectors';
import { initForm, removeForm } from 'store/form/actions';
import { selectFormValues } from 'store/form/selectors';
import { signUpRequest } from 'store/users/actions';
import { TSignUpModel } from 'store/users/types';

import { authValidate } from 'utils/validation/authValidation';

import { SIGN_UP_FORM } from './form/constants';
import config from './form/config';


const SignUp = (): JSX.Element => {
  const dispatch = useDispatch();
  const signInFetching = useSelector(makeSelectSignInFetching);
  const formValues = useSelector(selectFormValues(SIGN_UP_FORM));
  const [errors, setErrors] = useState({});
  const signUp = (): void => {
    if (!isEmpty(errors)) {
      delete formValues.confirm_password;
      dispatch(signUpRequest(formValues as TSignUpModel));
    }
  };

  useEffect(() => {
    authValidate(true, formValues).then(res => setErrors(res));
  }, []);

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
    <AuthLayout>
      <Form
        errors={errors}
        name={SIGN_UP_FORM}
        config={config}
      />
      <Button
        disabled={signInFetching}
        onClick={signUp}
        text="Sign up"
      />
    </AuthLayout>
  );
};

export default SignUp;

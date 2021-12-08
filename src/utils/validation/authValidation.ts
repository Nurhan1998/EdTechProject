import * as yup from 'yup';
import { ObjectShape } from 'yup/lib/object';

import { TFormValues } from 'store/form/types';

import { stringRequiredWithEmail, stringYup, stringYupPassword } from 'utils/validation/index';
import { getValidationErrors } from 'utils/getValidationErrors';

const authValidation = (isSignUp: boolean): ObjectShape => {
  const schema: ObjectShape = {
    email: stringRequiredWithEmail,
    password: stringYupPassword,
  };
  if (isSignUp) {
    schema.confirm_password = stringYup.oneOf([yup.ref('password'), null], 'Passwords didn\'t match');
  }
  return schema;
};

export const authValidate = (isSignUp: boolean, values: TFormValues): Promise<Record<string, string>> =>
  yup.object().shape(authValidation(isSignUp)).validate(values, { abortEarly: false })
    .then(res => res)
    .catch(errors => getValidationErrors(errors));

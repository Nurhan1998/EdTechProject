import * as yup from 'yup';
import { ObjectShape } from 'yup/lib/object';

import { stringRequiredWithEmail, stringYup, stringYupPassword } from 'utils/validation/index';

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

export const schemaAuth = (isSignUp: boolean): unknown => yup.object().shape(authValidation(isSignUp));

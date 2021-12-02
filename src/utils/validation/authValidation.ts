import * as yup from 'yup';
import { Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { ObjectShape } from 'yup/lib/object';

import { stringRequiredWithEmail, stringYup, stringYupPassword } from 'utils/validation/index';

const authValidation = (isSignUp: boolean): ObjectShape => {
  const schema: ObjectShape = {
    email: stringRequiredWithEmail,
    password: stringYupPassword,
    confirm_password: stringYup.oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
  };
  if (!isSignUp) {
    delete schema.confirm_password;
    return schema;
  }
  return schema;
};

export const schemaAuth = (isSignUp: boolean): Resolver => yupResolver(yup.object().shape(authValidation(isSignUp)));

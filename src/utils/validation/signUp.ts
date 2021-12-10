import * as yup from 'yup';
import { ValidationError } from 'yup';
import { ObjectShape } from 'yup/lib/object';

import { TFormValues } from 'store/form/types';

import { stringRequiredWithEmail, stringYup, stringYupPassword } from 'utils/validation/index';
import { getValidationErrors } from 'utils/getValidationErrors';

const schema: ObjectShape = {
  email: stringRequiredWithEmail,
  password: stringYupPassword,
  confirm_password: stringYup.oneOf([yup.ref('password'), null], 'Passwords didn\'t match')
};

export const signUpValidate = (values: TFormValues): Record<string, string | string[]> | boolean => {
  try {
    yup.object().shape(schema).validateSync(values, { abortEarly: false });
    return true;
  } catch (error) {
    return getValidationErrors(error as ValidationError);
  }
};


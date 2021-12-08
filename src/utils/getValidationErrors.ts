import { ValidationError } from 'yup';


export const getValidationErrors = (errors: ValidationError): Record<string, string> => errors.inner
  .reduce((errors, currentValidation) => {
    if (typeof currentValidation.path === 'string') {
      return Object.assign(errors, {
        [currentValidation.path]: currentValidation.errors[0],
      });
    }
    return currentValidation;
  }, {});

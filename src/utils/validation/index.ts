import * as yup from 'yup';

export const numberYup = yup.number();
export const stringYup = yup.string().trim();
export const stringYupRequired = stringYup.required('Поле обязательно для заполенения');
export const stringRequiredWithEmail = stringYupRequired.email('Электронная почта должна быть действительной');
export const stringYupPassword = stringYupRequired
  .min(6, 'Минимальное количество символов должно быть больше 8ти.')
  .max(16, 'Максимальное количество символов должно быть меньше 16ти.')
  .matches(/[a-zA-Z0-9]/, 'Пароль должен состоять только из латинских символов.');

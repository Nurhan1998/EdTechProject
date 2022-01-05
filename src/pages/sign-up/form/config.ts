import { EFieldType, IConfig } from 'components/Form/types';

const config: Array<IConfig> = [
  // {
  //   name: 'firstname',
  //   type: EFieldType.TEXT,
  //   label: 'First name',
  //   placeholder: 'Enter your first name',
  // },
  // {
  //   name: 'lastname',
  //   type: EFieldType.TEXT,
  //   label: 'Last name',
  //   placeholder: 'Enter your last name',
  // },
  // {
  //   name: 'phone',
  //   type: EFieldType.TEXT,
  //   label: 'Phone number',
  //   placeholder: 'Enter your phone number',
  // },
  {
    name: 'email',
    type: EFieldType.TEXT,
    label: 'Email',
    placeholder: 'email@example.com',
  },
  {
    name: 'password',
    type: EFieldType.TEXT,
    label: 'Password',
    inputType: 'password',
    placeholder: 'Type your password...'
  },
  {
    name: 'confirm_password',
    type: EFieldType.TEXT,
    label: 'Confirm password',
    inputType: 'password',
    placeholder: 'Confirm your password...'
  }
];
export default config;

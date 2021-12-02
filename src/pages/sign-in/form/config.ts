import { EFieldType, IConfig } from 'components/Form/types';

const config: Array<IConfig> = [
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
  }
];
export default config;

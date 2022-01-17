import { EFieldType, IConfig } from 'components/Form/types';

export const personalConfig: Array<IConfig> = [
  {
    name: 'firstname',
    type: EFieldType.TEXT,
    label: 'Name and Surname',
    placeholder: 'Enter you name',
    className: 'left-side_input'
  },
  {
    name: 'phone',
    type: EFieldType.TEXT,
    label: 'Phone',
    placeholder: 'Enter you phone number',
    className: 'right-side_input'
  },
  {
    name: 'country',
    type: EFieldType.SELECT,
    label: 'Country',
    placeholder: 'Select country',
    className: 'left-side_input'
  },
  {
    name: 'postautomat',
    type: EFieldType.TEXT,
    label: 'Post Automat',
    className: 'right-side_input'
  },
  {
    name: 'address',
    type: EFieldType.TEXT,
    label: 'Address',
    placeholder: 'Enter your address',
    className: 'left-side_input'
  },
  {
    name: 'national_id',
    type: EFieldType.TEXT,
    label: 'National ID',
    placeholder: 'Enter national id',
    className: 'right-side_input'
  },
  {
    name: 'paymentmethod',
    type: EFieldType.SELECT,
    label: 'Payment Method',
    placeholder: 'Enter payment method',
    className: 'left-side_input'
  },
  {
    name: 'paymentinfo',
    type: EFieldType.TEXT,
    label: 'Payment info',
    placeholder: 'Type payment info',
    className: 'right-side_input'
  },
  {
    name: 'is_hireable',
    type: EFieldType.SELECT,
    label: 'Hire list',
    className: 'left-side_input'
  },
  {
    name: 'password',
    type: EFieldType.TEXT,
    label: 'Change password',
    placeholder: 'Type new password',
    className: 'right-side_input'
  }
];

export const systemConfig: Array<IConfig> = [
  {
    name: 'language',
    type: EFieldType.SELECT,
    label: 'Default language',
    className: ''
  },
  {
    name: 'theme',
    type: EFieldType.SELECT,
    label: 'Default theme',
  }
];

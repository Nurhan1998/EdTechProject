import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { TCustomControllerProps } from 'components/Input/types';
import Input from 'components/Input';

export const InputWithController: FC<TCustomControllerProps> = ({
  control,
  name,
  ...props
}) =>
  (
    <Controller
      name={name}
      control={control}
      render={({ field }): JSX.Element =>
        <Input
          value={field.value || ''}
          onChange={field.onChange}
          {...props}
        />
      }
    />
  );

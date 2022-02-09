import { FC } from 'react';
import cn from 'classnames';

import { IButtonProps } from 'components/Button/types';

export const Button: FC<IButtonProps> = props => {
  const { children, className, ...rest } = props;
  return (
    <button
      {...rest}
      className={cn('most-button', className)}
    >
      {children}
    </button>
  );
};


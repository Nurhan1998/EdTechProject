import { FC } from 'react';
import cn from 'classnames';

import { IButtonProps } from 'components/Button/types';

export const Button: FC<IButtonProps> = props => {
  const { text, className } = props;
  return (
    <button
      {...props}
      className={cn('most-button', className)}
    >
      {text}
    </button>
  );
};


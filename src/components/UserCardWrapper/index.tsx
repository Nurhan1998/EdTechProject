import { FC } from 'react';
import cn from 'classnames';


const UserCardWrapper: FC<{ className?: string }> = ({ children, className }) => (
  <div className={cn('user-card_wrapper', className)}>
    {children}
  </div>
);

export default UserCardWrapper;

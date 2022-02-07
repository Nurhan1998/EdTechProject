import { FC } from 'react';
import cn from 'classnames';

const UserCardInfo: FC<{ className?: string }> = ({ children, className }) => (
  <div className={cn('userCardInfo', className)}>{children}</div>
);

export default UserCardInfo;

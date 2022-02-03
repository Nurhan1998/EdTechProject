import { FC } from 'react';
import cn from 'classnames';

const UserCardInfo: FC<{ className?: string }> = ({ children, className }) => (
  <div className={cn('user-card_info', className)}>{children}</div>
);

export default UserCardInfo;

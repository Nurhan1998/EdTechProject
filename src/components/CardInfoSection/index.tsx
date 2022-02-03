import { FC } from 'react';
import cn from 'classnames';


const CardInfoSection: FC<{ className?: string }> = ({ children, className }) => (
  <div className={cn('data', className)}>{children}</div>
);

export default CardInfoSection;

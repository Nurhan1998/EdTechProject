import Link from 'next/link';
import cn from 'classnames';

import { ILinkItem } from 'components/Layout/Sidebar/types';


const LinkItem = ({ path, isActive, icon, name, className }: ILinkItem): JSX.Element => (
  <div className={cn('sidebar_links__item', { active: isActive })}>
    <span className="sidebar_links__item-icon">{icon}</span>
    <Link href={path}>
      <a className={className}>
        {name}
      </a>
    </Link>
  </div>
);
export default LinkItem;

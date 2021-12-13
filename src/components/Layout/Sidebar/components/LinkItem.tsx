import Link from 'next/link';
import cn from 'classnames';
import Image from 'next/image';

import { ILinkItem } from 'components/Layout/Sidebar/types';


const LinkItem = ({ path, isActive, iconName, name }: ILinkItem): JSX.Element => (
  <div className={cn('sidebar_links__item', { active: isActive })}>
    <Image
      className="sidebar_links__item-icon"
      width={20}
      height={20}
      src={`/src/assets/img/svg/${iconName}.svg`} alt="tes"
    />
    <Link href={path}>
      <a>
        {name}
      </a>
    </Link>
  </div>
);
export default LinkItem;

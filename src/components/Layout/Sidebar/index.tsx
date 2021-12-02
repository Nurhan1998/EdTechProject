import { FC, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cn from 'classnames';


import { CHAT_PAGE, HOME_PAGE } from 'configuration/urls';

import { Logo } from 'components/Icons/Logo/Logo';


import { ISidebar } from './types';


const Sidebar: FC<ISidebar> = ({ setSidebarWidth }): JSX.Element => {
  const router = useRouter();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sidebarRef.current?.clientWidth) {
      setSidebarWidth(sidebarRef.current.clientWidth);
    }
  }, [sidebarRef, setSidebarWidth]);

  const isMenuActive = (path: string): boolean => router?.pathname === path;

  return (
    <div className="sidebar_wrapper" ref={sidebarRef}>
      <div className="sidebar_logo__wrapper">
        <Link href={HOME_PAGE}>
          <a>
            <Logo/>
          </a>
        </Link>
      </div>
      <div className="sidebar_links__wrapper">
        <div className={cn('sidebar_links__item', { active: isMenuActive(HOME_PAGE) })}>
          <Link href={HOME_PAGE}>
            <a>
              <span>ic</span>
              Dashboard
            </a>
          </Link>
        </div>
        <div className={cn('sidebar_links__item', { active: isMenuActive(CHAT_PAGE) })}>
          <Link href={CHAT_PAGE}>
            <a>
              <span>ic</span>
              Chat
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

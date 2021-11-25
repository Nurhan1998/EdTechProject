import { FC, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { HOME_PAGE, CHAT_PAGE } from 'assets/consts/paths';
import cn from 'classnames';

import { IconMainLogo } from 'components/Icons';

import { ISidebar } from './types';


const Sidebar:FC<ISidebar> = ({ setSidebarWidth }):JSX.Element => {
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
            <IconMainLogo />
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

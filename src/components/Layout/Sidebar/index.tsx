import { FC, useRef, useEffect } from 'react';
import Link from 'next/link';
import { HOME_PAGE } from 'assets/consts/paths';

import { IconMainLogo } from 'components/Icons';

import { ISidebar } from './types';


const Sidebar:FC<ISidebar> = ({ setSidebarWidth }):JSX.Element => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sidebarRef?.current?.clientWidth) {
      setSidebarWidth(sidebarRef.current.clientWidth);
    }
  }, [sidebarRef, setSidebarWidth]);

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
        <div className="sidebar_links__item active">
          <Link href={HOME_PAGE}>
            <a>
              <span>ic</span>
              Dashboard
            </a>
          </Link>
        </div>
        <div className="sidebar_links__item">
          <Link href={HOME_PAGE}>
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

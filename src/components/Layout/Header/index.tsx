import { useEffect, useRef } from 'react';
import cn from 'classnames';
import { langBaseExample } from 'assets/consts/baseExample';

import Select from 'components/Select';

import Profile from './components/Profile';
import { IHeader } from './types';


const Header = ({ className, setHeaderHeight, sidebarWidth }: IHeader):JSX.Element => {
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (headerRef?.current?.clientHeight) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, [headerRef, setHeaderHeight]);
  return (
    <div
      ref={headerRef}
      className={cn('header_wrapper', className)}
      style={{ left: sidebarWidth }}
    >
      <div className="header_inner-wrapper">
        <div className="header_action__wrapper">
          <Select options={langBaseExample} />
        </div>
        <div className="header_profile__wrapper">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Header;

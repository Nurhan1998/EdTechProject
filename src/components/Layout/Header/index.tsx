import { useEffect, useRef } from 'react';
import cn from 'classnames';


import { Languages } from '../../../mocks/languages';

import Profile from './components/Profile';
import { IHeader } from './types';


const Header = ({ className, setHeaderHeight, sidebarWidth, rightSideBar }: IHeader): JSX.Element => {
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
      style={{ left: sidebarWidth, right: rightSideBar }}
    >
      <div className="header_inner-wrapper">
        <div className="header_profile__wrapper">
          <Profile/>
        </div>
        <div className="header_action__wrapper">
          {
            Languages.map(({ id, path, size }) => (
              <img key={id} src={path} style={{ width: size, height: size }}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Header;

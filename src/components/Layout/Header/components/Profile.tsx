import { useRef, useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import MostBell from 'components/Icons/MostBell';

import { HOME_PAGE } from '../../../../configuration/urls';


const Profile = (): JSX.Element => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);

  const name = 'Super';
  const surName = 'Investor';
  const imagePath = undefined;

  // const handleClickOutside = (e: MouseEvent) => {
  //   if (dropdownRef.current && dropdownRef.current.contains(e.target)) {
  //     setVisible(false);
  //   }
  // };
  //
  // useEffect(() => {
  //   if (visible) {
  //     document.addEventListener('mousedown', handleClickOutside);
  //   }
  //   return () => {
  //     if (visible) {
  //       document.removeEventListener('mousedown', handleClickOutside);
  //     }
  //   };
  // });

  const dropdownMenu = (
    <div className={cn('dropdown-menu_wrapper', { visible: visible })} ref={dropdownRef}>
      <div className="dropdown-menu_item">
        <Link href={HOME_PAGE}>
          <a>Company Profile</a>
        </Link>
      </div>
      <div className="dropdown-menu_item">
        <Link href={HOME_PAGE}>
          <a>Logout</a>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="header_profile__inner-wrapper" onClick={() => setVisible(!visible)}>
      <div className="header_profile__icon">
        {imagePath ? <img src={imagePath} alt="avatar"/> : (
          <>
            {name.substr(0, 1).toUpperCase()}
            {surName.substr(0, 1).toUpperCase()}
          </>
        )}
      </div>
      <div className="header_profile__title">
        <span>Hello,&nbsp;</span>
        {name}&nbsp;
        {surName}
      </div>
      <MostBell/>
      {visible && dropdownMenu}
    </div>
  );
};

export default Profile;

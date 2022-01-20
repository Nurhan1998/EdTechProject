import cn from 'classnames';
import { Languages } from 'mocks/languages';
import MediaQuery from 'react-responsive';

import SidebarLogo from 'components/Icons/Sidebar/SidebarLogo';
import BurgerMenuLines from 'components/Icons/burgerMenuLines';
import CrossLines from 'components/Icons/CrossLines';

import Profile from './components/Profile';
import { IHeader } from './types';


const Header = ({ className, handleClickMenu, setLanguage, language, visible }: IHeader): JSX.Element => (
  <div className={cn('header_wrapper', className)}>
    <div className="header_inner-wrapper">
      <div className="header_profile__wrapper">
        <Profile/>
      </div>
      <MediaQuery maxWidth={500}>
        <SidebarLogo height={32} width={87}/>
        <span onClick={handleClickMenu}>
          {visible ? <CrossLines width={24} height={24}/> : <BurgerMenuLines/>}
        </span>
      </MediaQuery>
      <div className="header_action__wrapper">
        <p className="action-title">{language}</p>
        <div>
          {Languages.map(({ icon, id, name }) => (
            <span
              key={`${id}_${name}`}
              className={cn('action', language === name ? 'active' : '')}
              onClick={() => setLanguage(name)}
            >
              {icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Header;

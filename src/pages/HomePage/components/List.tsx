import { userListBaseExample } from 'assets/consts/baseExample';

import { IUserCard } from '../types';

import UserCard from './UserCard';


const List = (): JSX.Element => (
  <div className="home-page_list__wrapper">
    <div className="home-page_list__item">
      {userListBaseExample.map((item:IUserCard) => (
        <UserCard
          key={item.id}
          id={item.id}
          avatar={item.avatar}
          name={item.name}
          surName={item.surName}
          hardSkill={item.hardSkill}
          statusHardSkill={item.statusHardSkill}
          softSkill={item.softSkill}
          statusSoftSkill={item.statusSoftSkill}
        />
      ))}
    </div>
  </div>
);

export default List;

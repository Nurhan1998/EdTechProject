import { userListBaseExample } from '../../../mocks/baseExample';

import { IUserCard } from '../types';

import UserCard from './UserCard';


const List = (): JSX.Element => (
  <div className="home-page_list__wrapper">
    {userListBaseExample.map((item: IUserCard) => (
      <UserCard
        progressbarColor={item.progressbarColor}
        skillName={item.skillName}
        likesCount={item.likesCount}
        key={item.id}
        id={item.id}
        avatar={item.avatar}
        name={item.name}
        surName={item.surName}
        hardSkill={item.hardSkill}
        softSkill={item.softSkill}
      />
    ))}
  </div>
);

export default List;

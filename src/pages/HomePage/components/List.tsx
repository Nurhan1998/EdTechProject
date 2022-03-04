import { IUsersListResponseData } from 'store/users/types';

import UserCard from './UserCard';

interface IUsersList {
  users: IUsersListResponseData[] | null;
}

const List = ({ users }:IUsersList): JSX.Element => (
  <div className="home-page_list__wrapper">
    {users?.map((item: IUsersListResponseData) => (
      <UserCard
        key={item.id}
        lastname={item.lastname}
        firstname={item.firstname}
        photo={item.photo}
      />
    ))}
  </div>
);

export default List;

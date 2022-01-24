import { IUsersListResponseData } from 'store/users/types';

import UserCard from './Card';



interface ICardProps {
  users: Partial<IUsersListResponseData>[] | null
}

export const UsersList = ({ users }: ICardProps): JSX.Element => (
  <div className="list">
    {users?.map(user => (
      <UserCard
        key={user.id}
        firstname={user.firstname}
        photo={user.photo}
        hskills={user.hskills}
        skills={user.skills}
      />
    ))}
  </div>
);

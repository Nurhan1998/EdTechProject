import UserCard from 'components/UserCard';

import { IUsersListResponseData } from 'store/users/types';



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

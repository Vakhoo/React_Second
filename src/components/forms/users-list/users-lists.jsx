import { useContext } from 'react';
import { UsersProvider } from '../../../providers/UsersProvider';
import UsersListItem from './users-list-item';

function UsersLists(props) {
  const { usersList } = useContext(UsersProvider);
  return (
    <div className="list-group">
      {usersList.map((user) => {
        return <UsersListItem user={user} key={user.id} />;
      })}
    </div>
  );
}

export default UsersLists;

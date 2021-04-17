import { useContext } from 'react';
import { UsersProvider } from '../../../providers/UsersProvider';
import './users-lists.css';
function UsersListItem({ user }) {
  const { onUsersChange } = useContext(UsersProvider);
  return (
    <div
      className="list-group-item list-group-item-action list-group-item-success mt-3"
      onClick={() => {
        onUsersChange(user);
      }}>
      <div>
        <div className="fw-bold">Name:</div>
        {user.name}
      </div>
      <div>
        <div className="fw-bold">Username:</div>
        {user.username}
      </div>
      <div>
        <div className="fw-bold">Email:</div>
        {user.email}
      </div>
      <div>
        <div className="fw-bold">Phone:</div>
        {user.phone}
      </div>
      <div>
        <div className="fw-bold">Website:</div>
        {user.website}
      </div>
    </div>
  );
}
export default UsersListItem;

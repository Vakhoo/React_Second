import AddUsersForm from '../../components/forms/add-users-form';
import UsersLists from '../../components/forms/users-list';
import UsersProviderComponent from '../../providers/UsersProvider';

function UsersHome(props) {
  return (
    <UsersProviderComponent>
      <div className="row">
        <div className="col-6">
          <AddUsersForm />
        </div>
        <div className="col-6">
          <UsersLists />
        </div>
      </div>
    </UsersProviderComponent>
  );
}
export default UsersHome;

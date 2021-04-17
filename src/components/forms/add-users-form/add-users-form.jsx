import { useContext, useState } from 'react';
import { UsersProvider } from '../../../providers/UsersProvider';

function AddUsersForm(props) {
  const { onUsersAdd } = useContext(UsersProvider);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name,
      username,
      email,
      phone,
      website,
    };
    onUsersAdd(newUser);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="username" className="form-label">
          Username:
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="phone" className="form-label">
          Phone:
        </label>
        <input
          type="number"
          className="form-control"
          id="phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <label htmlFor="website" className="form-label">
          Website:
        </label>
        <input
          type="text"
          className="form-control"
          id="website"
          value={website}
          onChange={(e) => {
            setWebsite(e.target.value);
          }}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default AddUsersForm;

import React, { useEffect, useState } from 'react';
import API_USERS_SERVICE from '../services/api-users';
export const UsersProvider = React.createContext(null);

function UsersProviderComponent({ children }) {
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await API_USERS_SERVICE.getUsersListAsync({ limit: 3 });
      setUsersList(data);
      // console.log(data);
    })();
  }, []);
  const onUsersAdd = (newUser) => {
    const newList = [...usersList, newUser];
    setUsersList(newList);
  };
  const onUsersChange = (user) => {
    const newList = usersList.filter((f) => f.id !== user.id);
    setUsersList(newList);
  };
  return (
    <UsersProvider.Provider value={{ usersList, onUsersAdd, onUsersChange }}>
      {children}
    </UsersProvider.Provider>
  );
}

export default UsersProviderComponent;

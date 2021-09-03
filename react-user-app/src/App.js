import React, { useState, Fragment } from 'react';
import AddUser from './components/Users/AddUser';
import UsersLists from './components/Users/UsersLists';

const App = () => {
  const [usersLists, setUsersLists] = useState([]);
  
  const addUserHandler = (uName, uAge) => {
    setUsersLists((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersLists users={usersLists} />
    </Fragment>
  );
}

export default App;

import React, { useState, useEffect, createContext, useContext } from 'react';
import './App.css';
import User from './components/User';
import UserForm from './components/UserForm';
import UserTable from './components/table';

export const UseUserContext = createContext({});

function App() {

  const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch('/allusers')
        .then(response => response.json())
        .then((data) => setUserData(data))
    }, [])

    const holdUser = []
    for (let user in userData) {
        holdUser.push(
          <User
            key={userData[user].user_id}
            id={userData[user].user_id}
            name={userData[user].name}
            email={userData[user].email}
            birthday={userData[user].birthday}
            zip={userData[user].zip_code} />
        )
  };
  
  return (
    <UseUserContext.Provider className="App" value={{ userData}}>
      <header className="App-header">
        <UserForm />
        <UserTable holdUser={holdUser}/>
      </header>
    </UseUserContext.Provider>
  );
}

export default App;

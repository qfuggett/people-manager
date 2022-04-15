import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserTable from './components/table';

function App() {

  return (
    <div>
      <header className="App-header">
        <UserForm />
        <UserTable />
      </header>
    </div>
  );
}

export default App;

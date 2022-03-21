import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserTable from './components/table';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <UserTable />
      </header>
    </div>
  );
}

export default App;

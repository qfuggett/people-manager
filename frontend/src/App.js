import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState(null);

  function getData() {
    fetch('/main')
    .then((response) => response.json())
      .then((data) => {
        setData(data)
        console.log(data)
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>Details</p>
        <button onClick={getData} >Click</button>
        {data && <div>
          <p>Email: {data.email}</p>
          <p>Name: {data.name}</p>
        </div>}
      </header>
    </div>
  );
}

export default App;

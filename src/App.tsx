import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 data-testid="my-title">Demo Cypress</h2>
        <img data-testid="my-logo" src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button data-testid="my-button" onClick={() => console.log('You clicked the button')}>Click Me</button>
      </header>
    </div>
  );
}

export default App;

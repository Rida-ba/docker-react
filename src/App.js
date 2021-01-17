import React from 'react';
import devops from './devops.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={devops} className="App-logo" alt="logo" />
        <p>
          Welcome to React App on AWS with CI/CD pipeline.
        </p>
        <a
          className="App-link"
          href="https://www.vaudoise.ch/fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Vaudoise Assurances
        </a>
      </header>
    </div>
  );
}

export default App;

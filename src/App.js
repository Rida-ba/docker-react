import React from 'react';
import devops from './devops.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={devops} className="App-logo" alt="logo" />
        <p>
         Test web app.
        <a
          className="App-link"
          href="https://www.vaudoise.ch/fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Vaudoise Assurances
        </a>
        </p>
      </header>
    </div>
  );
}

export default App;

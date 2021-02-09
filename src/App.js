import React from 'react';
import devops from './devops.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={devops} className="App-logo" alt="logo" />
        <p>
         Test deploy web app.
        <a
          className="App-link"
          href="https://www.accenture.com/ch-en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Accenture
        </a>
        </p>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import devops from './devops.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={devops} className="App-logo" alt="logo" />
        <p>
          Welcome Pictet and Thank you for listening !
        </p>
        <p>
          Deploy a web app with CI/CD (Git, Travis CI and AWS)
        </p>
        <p>
        <a
          className="App-link"
          href="https://github.com/Rida-ba/docker-react.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my Repositorie
        </a>
        </p>
      </header>
    </div>
  );
}

export default App;

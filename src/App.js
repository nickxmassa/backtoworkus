import React from 'react';
import ReactGA from 'react-ga';
import StateNav from './routing';
import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  ReactGA.initialize('UA-166233935-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className="App">
      <header className="App-header">
        <StateNav />
      </header>
    </div>
  );
}

export default App;

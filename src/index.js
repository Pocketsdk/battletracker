import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import PlayerOne from './components/PlayerOne';
import PlayerTwo from './components/PlayerTwo';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <PlayerOne />
    <PlayerTwo />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

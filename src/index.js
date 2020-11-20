import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import PlayerOne from './components/PlayerOne';
import PlayerTwo from './components/PlayerTwo';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Nav />
    <App />
  </Router>,
  document.getElementById('root')
);
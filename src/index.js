import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header';
import PlayerOne from './components/PlayerOne';
import PlayerTwo from './components/PlayerTwo';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './tailwind.output.css';

ReactDOM.render(
  <Router>
    <Nav />
    <App />
  </Router>,
  document.getElementById('root')
);
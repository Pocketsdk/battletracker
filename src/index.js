import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nav from './components/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import './tailwind.output.css';

ReactDOM.render(
  <Router>
    <Nav />
    <App />
  </Router>,
  document.getElementById('root')
);
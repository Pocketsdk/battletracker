import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nav from './components/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import {createStore} from 'redux';
import scoreReducer from './Reducers/scoreReducer';
import {Provider, useSelector} from 'react-redux';
import './tailwind.output.css';
import { updateScoreP1 } from './Actions/updateScoreP1';


const store = createStore(
  scoreReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <Nav />
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
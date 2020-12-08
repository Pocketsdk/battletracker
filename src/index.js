import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { persistStore } from 'redux-persist';
import { PersistGate, persistGate } from 'redux-persist/lib/integration/react';
import App from './App';
import Nav from './components/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import './tailwind.output.css';


const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={ store }>
    <PersistGate 
      loading={<div>Loading...</div>}
      persistor = {persistor}>
      <Router>
        <Nav />
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
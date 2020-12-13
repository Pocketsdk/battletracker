import React, { createContext, useContext, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Input from './components/Input';
import Display from './components/Display';
import Home from './components/Home';
import { UserContext } from './UserContext';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scorep1: 33,
      scorep2: 11,
      updateScorep1: ( newTotal1 ) => {
        this.setState(() => ({
          scorep1 : newTotal1,
        }))
      }
    };
  }

  render() {

    return (
      <UserContext.Provider value={this.state}>
          <div className="App">
            <Switch>
              <Route path="/" component={Home} exact></Route>
              <Route path="/Input" component={Input}></Route>
              <Route path="/Display" component={Display}></Route>
            </Switch>
          </div>
      </UserContext.Provider>
    );
  }
}
export default App;

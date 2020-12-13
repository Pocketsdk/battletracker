import React, {Provider, useContext} from 'react';
import { Switch, Route } from 'react-router-dom';
import Input from './components/Input';
import Display from './components/Display';
import Home from './components/Home';


const User1Context = React.createContext();

const User2Context = React. createContext();

class App extends React.Component {

  render() {


    const {user1, user2} = this.props;

    return (
      <User1Context.Provider value={user1}>
        <User2Context.Provider value={user2}>
          <div className="App">
            <Switch>
              <Route path="/" component={Home} exact></Route>
              <Route path="/Input" component={Input}></Route>
              <Route path="/Display" component={Display}></Route>
            </Switch>
          </div>
        </User2Context.Provider>
      </User1Context.Provider>
    );
  }
}
export default App;

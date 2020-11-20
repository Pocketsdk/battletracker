import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Input from './components/Input';
import Display from './components/Display';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/Input" component={Input}></Route>
            <Route path="/Display" component={Display}></Route>
          </Switch>
    </div>
  );
}

export default App;

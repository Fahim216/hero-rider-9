import logo from './logo.svg';
import './App.css';
import NoMatch from './components/NoMatch/NoMatch';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination';
import CreateAccount from './components/CreateAccount/CreateAccount';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    
    <Router>
      <Header/>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/CreateAccount">
          <CreateAccount/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/destination">
          <Destination/>
        </Route>
        <Route path="/newAccount">
          <CreateAccount/>
        </Route>
        <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
            <NoMatch />
          </Route>
      </Switch>
    </Router>
  
    
    
  );
}

export default App;

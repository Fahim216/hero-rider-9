
import './App.css';
import NoMatch from './components/NoMatch/NoMatch';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';

export const UserContext = createContext();


function App() {
  const [loggedInUser,setLoggedInUser]=useState({
    name:'',
    email:'',
    password:'',
    error:'',
    
  
  })
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      
    <Router>
      <Header/>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/destination">
          <Destination/>
        </PrivateRoute>
        <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
            <NoMatch />
          </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  
    
    
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import NavBar from './components/navBar/NavBar'
import SearchBar from './components/searchBar/SearchBar'
import Login from "./components/login/Login"
import SignUp from './components/signUp/SignUp';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

//testing change
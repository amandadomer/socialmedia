import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import NavBar from "./components/navBar/NavBar";
import Home from "./components/home/Home";
import SearchBar from "./components/searchBar/SearchBar";
import Login from "./components/login/Login";
import SignUp from "./components/signUp/SignUp";
import Posts from "./components/posts/Posts";
import "./App.css";
import Alert from "./components/landing/Alert";

//Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <NavBar />
        <Route exact path="/" component={Landing} />
        <Alert />
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);

export default App;

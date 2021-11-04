import React, { Fragment, useEffect } from "react";
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

import PrivateRoute from "./routing/PrivateRoute";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/AuthToken";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Route exact path="/" component={Landing} />
          <Alert />
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/posts" component={Posts} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

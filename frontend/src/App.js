import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import NavBar from "./components/navBar/NavBar";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import SignUp from "./components/signUp/SignUp";
import Posts from "./components/posts/Posts";
import "./App.css";
import Alert from "./components/landing/Alert";
import CreateProfile from "./components/profile/CreateProfile";
import PrivateRoute from "./routing/PrivateRoute";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/AuthToken";
import EditProfile from "./components/profile/EditProfile";

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
            <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            />
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

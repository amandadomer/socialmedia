import React from "react";
import { Route, Switch } from "react-router-dom";
import SignUp from "../components/signUp/SignUp";
import Login from "../components/login/Login";
import Alert from "../components/landing/Alert";
import Home from "../components/home/Home";
import CreateProfile from "../components/profile/CreateProfile";
import EditProfile from "../components/profile/EditProfile";
import AllUsers from "../components/allUsers/AllUsers";
import Profile from "../components/profile/Profile";
import Posts from "../components/posts/Posts";
import Post from "../components/post/Post";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={AllUsers} />
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
      </Switch>
    </section>
  );
};

export default Routes;

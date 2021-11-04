import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../login/Login";
import "./Landing.css";

function Landing() {
  return (
    <div className="row align-items-center">
      <div className="col-6">
        <h1 className="header">
          Welcome to<br></br>devWeb<br></br>
        </h1>
        <h1 className="subHeader">Show off your work and get hired!</h1>
      </div>
      <div class="col-6">
        <Login />
      </div>
    </div>
  );
}

export default Landing;

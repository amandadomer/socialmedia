import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from '../login/Login';
import './Landing.css'

function Landing() {
  return (
    <div>   
      <div className="header">
       Welcome to devWeb
       </div>
      <div className="subHeader">
      Show off your work and get hired!
      </div> 
        <Login />
    </div>
  );
}

export default Landing;


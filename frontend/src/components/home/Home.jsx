import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from '../login/Login';
import './Home.css'

function Home() {
  return (
    <div>   
      <div className="header">
       Welcome to Starving Devs
       </div>
    <div className="subHeader">
      Show off your work and get hired!
    </div> 
        <Login />
    </div>
  );
}

export default Home;


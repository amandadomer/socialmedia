import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import Login from "../login/Login";
import "./Landing.css";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }
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
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);

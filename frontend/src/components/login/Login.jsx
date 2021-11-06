import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";
import { Link, Redirect } from "react-router-dom";
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }

  const { email, password } = formData;
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="card">
          <label for="exampleInputEmail1" className="form-label">
            Email address:
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            name="email"
            onChange={(e) => onChange(e)}
            value={email}
            required
          />
          <label for="exampleInputPassword1" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            onChange={(e) => onChange(e)}
            value={password}
            minLength="6"
          />
          <button type="submit" className="btn">
            Submit
          </button>
          <br></br>
          Don't have an account? Sign up <Link to="/signup">here.</Link>
        </div>
      </form>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);

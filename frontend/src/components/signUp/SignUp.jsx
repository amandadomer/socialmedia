import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "./SignUp.css";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const SignUp = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match");
    } else {
      register({ name, email, password });
    }
  };
  return (
    <Fragment>
      <div className="row align-items-center">
        <div className="col-6">
          <div className="header">Create an Account</div>
          <div className="subHeader">We're so glad you're here!</div>
        </div>
        <div className="col-6">
          <div className="card">
            <form onSubmit={(e) => onSubmit(e)}>
              <label for="exampleInputEmail1" className="form-label">
                Full Name:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
                required
              />
              <label for="exampleInputEmail1" className="form-label">
                Email address:
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="exampleInputEmail1"
                name="email"
                aria-describedby="emailHelp"
                onChange={(e) => onChange(e)}
                value={email}
                required
              />
              <label for="exampleInputPassword1" className="form-label">
                Create password:
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={(e) => onChange(e)}
                value={password}
                minLength="6"
              />
              <label for="exampleInputPassword2" className="form-label">
                Confirm password:
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                name="password2"
                onChange={(e) => onChange(e)}
                value={password2}
                minLength="6"
              />
              <button type="submit" className="btn">
                Submit
              </button>
            </form>{" "}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, register })(SignUp);

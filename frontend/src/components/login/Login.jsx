import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";
import { Link } from "react-router-dom";
import React, { Fragment, useState } from "react";

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Success");
  };

  const { email, password } = formData;
  return (
    <Fragment>
      <form>
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
          <div className="buttons">
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
          <br></br>
          Don't have an account? Sign up <Link to="/signup">here.</Link>
        </div>
      </form>
    </Fragment>
  );
};

export default Login;

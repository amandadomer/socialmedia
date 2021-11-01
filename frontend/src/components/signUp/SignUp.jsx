import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './SignUp.css'

const SignUp = (props) => {
    return (
  <form> 
    <div className="header">
      Create an Account
    </div>
    <div className="subHeader">
      We're so glad you're here!
    </div> 
    <div class="card">
      <label for="exampleInputEmail1" class="form-label">Email address:</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      <label for="exampleInputPassword1" class="form-label">Create password:</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    <button type="submit" class="btn">Submit</button>
    </div>
  </form>
          
  )};

export default SignUp;
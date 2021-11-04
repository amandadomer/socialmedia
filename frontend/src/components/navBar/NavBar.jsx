import React, { Fragment } from "react";
import SearchBar from "../searchBar/SearchBar";
import "./NavBar.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Link } from "react-router-dom";

const NavBar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div className="navBar text-dark">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand text-dark" href="#">
          devWeb
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-dark">
            <li className="nav-item active">
              <a className="nav-link text-dark" href="#">
                News Feed
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Friends
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={logout}
                href="#!"
                className="nav-link text-dark"
                href="#"
              >
                Logout
              </a>
            </li>
          </ul>
          <SearchBar />
        </div>
      </nav>
    </div>
  );

  const guestLinks = (
    <div className="navBar text-dark">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand text-dark" href="#">
          devWeb
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-dark">
            <li className="nav-item active">
              <a className="nav-link text-dark" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
  return (
    <div className="navBar text-dark">
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand text-dark" href="#">
          devWeb
        </Link>

        {!loading && (
          <Fragment> {isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </nav>
    </div>
  );
};

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(NavBar);

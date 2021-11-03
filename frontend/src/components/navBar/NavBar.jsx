import React from "react";
import SearchBar from "../searchBar/SearchBar";
import "./NavBar.css";

function NavBar(props) {
  return (
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
          </ul>
          <SearchBar />
        </div>
      </nav>
    </div>
  );
}
export default NavBar;

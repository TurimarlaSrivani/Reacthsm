import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          HSM
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                <strong>Home</strong>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                <strong>About Us</strong>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/ourServices">
                <strong>Services</strong>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/gallery">
                <strong>Gallery</strong>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                <strong>Contact Us</strong>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-collapse collapse w-800 order-3 dual-collapse2">
        <ul className="navbar-nav mr-1">
          <li className="nav-item">
            <NavLink className="nav-link btn" to="/login">
              <strong>Login</strong>
            </NavLink>
          </li>
          <br></br>
          <li className="nav-item margin-left:2px">
            <NavLink className="nav-link btn " to="/logout">
              <strong>Logout</strong>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    
  );
};

export default Nav;
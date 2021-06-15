import React, { Component } from "react";
import { NavLink,Link } from "react-router-dom";

class Logout extends Component {
  state = {};
  render() {
    return (
      <div class="card " align="center">
        <h5 class="card-header bg-dark text-white mb-3 ">
          Successfully logged out!
        </h5>
        <div class="card-body">
          <p class="card-text">Thanks for visiting.</p>
          <Link to="/login">Logout</Link>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div
        class=" text-center bg-dark"
        style={{
          color: "white",
          marginTop: "1rem",
          padding: "1rem",
          bottom: 0,
          left: 0,
          width: "100%",
        }}
      >
        <p>
          © 2021 HSM Group. All Rights Reserved
          <NavLink to="#"> Privacy Terms</NavLink>
        </p>
      </div>
      </div>
    );
  }
}

export default Logout;
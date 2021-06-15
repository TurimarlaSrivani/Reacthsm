import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FaGooglePlusG } from "react-icons/fa";

class Footer extends Component {
  state = {};
  render() {
    return (
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
    );
  }
}

export default Footer;
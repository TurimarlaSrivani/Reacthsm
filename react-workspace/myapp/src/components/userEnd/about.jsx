import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="text-center">
        <div className="page-nav row">
          <div className="container">
            <div class="row,text-center  ">
              <br />
              <h1>About HSM</h1>
            </div>
          </div>
        </div>

        <hr class="featurette-divider"></hr>
        <br />
        <div class="row featurette">
          <div class="col-md-5 order-md-3">
            <h3 class="featurette-heading">Welcome to HSM</h3>
            <p class="lead" align="justify">
              The health service management (HSM) is an integrated software that
              handles different directions of workflow. It manages the smooth
              healthcare performance along with administrative, medical, legal
              and financial control. That is a cornerstone for the successful
              operation of the healthcare facility. The health system software
              covers the services that unify and simplify the work of healthcare
              professionals as well as their interactions with patients. The
              hospital management system feature list is concentrated on
              providing the smooth experience of patients, staff and hospital
              authorities. It might seem that their expectations differ, they
              still are covered by components of the hospital information
              system.
              <br />
              HSM was introduced to solve the complications coming from managing
              all the paper works of every patient associated with the various
              departments of hospitalization with confidentiality. HSM provides
              the ability to manage all the paperwork in one place, reducing the
              work of staff in arranging and analyzing the paperwork of the
              patients.
            </p>
          </div>
          <div class="col-md-6">
            <img
              src="https://www.herzing.edu/sites/default/files/styles/fp_960_640/public/images/careers/salary-health-care-management.jpg?h=520a578a&itok=aja8J1xB"
              svg
              width="550"
              height="550"
              role="img"
              aria-label="Placeholder: 600x600"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            />
          </div>
        </div>
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

export default About;
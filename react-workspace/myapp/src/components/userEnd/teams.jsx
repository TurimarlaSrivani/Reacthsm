import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Teams extends Component {
  state = {};
  render() {
    return (
      <div className="text-center">
        <div className="page-nav row">
          <div className="container">
            <div class="row, text-center ">
              <br />
              <h1>Our Teams</h1>
            </div>
          </div>
        </div>
        <hr className="featurette-divider"></hr>

        <section class="key-features kf-2">
          <div class="container">
            <div class="inner-title">
              <p>Take a look at some of our best Doctors</p>
            </div>
            <div class="row ">
              <div class="col-m-1 mr-4 shadow">
                <div
                  class="card m-2 bg-info"
                  style={{
                    width: "21rem",
                    height: "30rem",
                    //background: "deepskyblue  ",
                  }}
                >
                  <div class="card-body">
                    <img
                      src="https://www.smarteyeapps.com/demo/health-services-free-medical-website-templates/assets/images/team/t1.jpg"
                      height="400"
                      width="290"
                      crop="fill"
                      effect="sepia"
                      radius="20"
                    />
                    <h5>Dr. Niuise Paule</h5>
                    <p>(CEO & Chairman)</p>
                  </div>
                </div>
              </div>

              <div class="col-m-1 mr-4 shadow">
                <div
                  class="card m-2 bg-info"
                  style={{
                    width: "21rem",
                    height: "30rem",
                    //background: "deepskyblue  ",
                  }}
                >
                  <div class="card-body">
                    <img
                      src="https://www.smarteyeapps.com/demo/health-services-free-medical-website-templates/assets/images/team/t2.jpg"
                      height="400"
                      width="290"
                      crop="fill"
                      effect="sepia"
                      radius="20"
                    />
                    <h5>Dr. Mathue Samuel</h5>
                    <p>(Chief Doctor)</p>
                  </div>
                </div>
              </div>

              <div class="col-m-1 mr-2 shadow">
                <div
                  class="card m-2 bg-info"
                  style={{
                    width: "21rem",
                    height: "30rem",
                    //background: "deepskyblue  ",
                  }}
                >
                  <div class="card-body">
                    <img
                      src="https://www.smarteyeapps.com/demo/health-services-free-medical-website-templates/assets/images/team/t3.jpg"
                      height="400"
                      width="290"
                      crop="fill"
                      effect="sepia"
                      radius="20"
                    />
                    <h5>Samuani Simi</h5>
                    <p>(Chief Doctor)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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

export default Teams;
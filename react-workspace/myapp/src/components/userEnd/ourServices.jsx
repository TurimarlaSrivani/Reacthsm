import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHospitalAlt,
  FaStethoscope,
  FaBriefcaseMedical,
  FaPoll,
} from "react-icons/fa";
import { BiFoodTag } from "react-icons/bi";
import { GiMedicines } from "react-icons/gi";

class ourServices extends Component {
  state = {};
  render() {
    let iconStyles = { color: "white", fontSize: "1.5em" };
    return (
      <div className="text-center">
        <div className="page-nav row">
          <div className="container">
            <div class="row, text-center ">
              <br />
              <h1>Our Services</h1>
            </div>
          </div>
        </div>
        <hr className="featurette-divider"></hr>

        <section class="key-features kf-2">
          <div class="container">
            <div class="inner-title">
              <h4>Our Key Features</h4>
              <p>Take a look at some of our key features</p>
            </div>

            <div class="row ">
              <div class="col-m-1 mr-3 shadow ">
                <div
                  class="card m-2 bg-info"
                  style={{
                    width: "21rem",
                    height: "14rem",
                    //background: "deepskyblue ",
                  }}
                >
                  <div class="card-body">
                    <FaHospitalAlt size={60} style={iconStyles} />
                    <br />
                    <br />
                    <h5>Newest Technologies</h5>
                    <p>Technology is best when it brings people together.</p>
                  </div>
                </div>
              </div>

              <div class="col-m-1 mr-3 shadow">
                <div
                  class="card m-2 bg-info"
                  style={{
                    width: "21rem",
                    height: "14rem",
                    //background: "deepskyblue  ",
                  }}
                >
                  <div class="card-body">
                    <FaStethoscope size={60} style={iconStyles} />
                    <br />
                    <br />
                    <h5>Experienced Doctors</h5>
                    <p>
                      The presence of the doctor is the beginning of the cure.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-m-1 mr-3 shadow">
                <div
                  class="card m-2 bg-info"
                  style={{
                    width: "21rem",
                    height: "14rem",
                    //background: "deepskyblue  ",
                  }}
                >
                  <div class="card-body">
                    <FaBriefcaseMedical size={60} style={iconStyles} />
                    <br />
                    <br />
                    <h5>High Customer Satisfaction</h5>
                    <p>The customer's perception is our reality.</p>
                  </div>
                </div>
              </div>

              <div class="col-m-1 mr-3 mt-4 shadow">
                <div
                  class="card m-2 bg-info"
                  style={{
                    width: "21rem",
                    height: "14rem",
                    //background: "deepskyblue  ",
                  }}
                >
                  <div class="card-body">
                    <BiFoodTag size={60} style={iconStyles} />
                    <br />
                    <br />
                    <h5>Diet</h5>
                    <p>The groundwork of all happiness is health.</p>
                  </div>
                </div>
              </div>

              <div class="col-m-1 mr-3 mt-4 shadow">
                <div
                  class="card m-2 bg-info"
                  style={{
                    width: "21rem",
                    height: "14rem",
                    //background: "deepskyblue  ",
                  }}
                >
                  <div class="card-body">
                    <GiMedicines size={60} style={iconStyles} />
                    <br />
                    <br />
                    <h5>Pharma Team</h5>
                    <p>
                      It is easy to get thousand prescriptions but hard to get a
                      single remedy.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-m-1 mr-3 mt-4 shadow">
                <div
                  class="card m-2 bg-info"
                  style={{
                    width: "21rem",
                    height: "14rem",
                    //background: "deepskyblue  ",
                  }}
                >
                  <div class="card-body">
                    <FaPoll size={60} style={iconStyles} />
                    <br />
                    <br />
                    <h5>Insurance Policy</h5>
                    <p>
                      Insurance will help you in your time of need without any
                      limit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

export default ourServices;
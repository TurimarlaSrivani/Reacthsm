import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
class Blogs extends Component {
  state = {};
  render() {
    return (
      <div className="text-center">
        <div className="page-nav row">
          <div className="container">
            <div class="row, text-center ">
              <br />
              <h1>
                <strong>Blogs</strong>
              </h1>
            </div>
          </div>
        </div>
        <hr className="featurette-divider"></hr>

        <section class="key-features kf-2">
          <div class="container-fluid center">
            <div class="row ">
              <div class="col-m-1 mr-2 ml-5 shadow ">
                <div
                  class="card m-2"
                  style={{
                    width: "25rem",
                    height: "25rem",
                    //background: "deepskyblue ",
                  }}
                >
                  <div class="card-body">
                    <img src="https://www.smarteyeapps.com/demo/health-services-free-medical-website-templates/assets/images/services/s1.jpg" />
                    <Link
                      className="nav-link"
                      to="https://healthmanagement.org/c/imaging/post/an-epiphany-from-inside-the-covid-19-crisis-in-the-uk "
                    >
                      <h5>
                        An Epiphany from Inside the COVID-19 Crisis in the UK
                      </h5>
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-m-1 mr-2 shadow">
                <div
                  class="card m-2"
                  style={{
                    width: "25rem",
                    height: "25rem",
                    //background: "deepskyblue  ",
                  }}
                >
                  <div class="card-body">
                    <img
                      src="https://www.mibluesperspectives.com/wp-content/uploads/2020/09/GettyImages-1165575988-670x377.jpg"
                      width="300"
                      height="300"
                      role="img"
                    />
                    <Link
                      className="nav-link"
                      to="https://healthmanagement.org/c/hospital/post/patients-voice-to-cancel-cancer-when-accountability-becomes-responsibility "
                    >
                      <h5>
                        Patient’s Voice to Cancel Cancer: When Accountability
                        Becomes Responsibility
                      </h5>
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-m-1 shadow">
                <div
                  class="card m-2"
                  style={{
                    width: "25rem",
                    height: "25rem",
                    //background: "deepskyblue  ",
                  }}
                >
                  <div class="card-body">
                    <img
                      src="https://i.natgeofe.com/k/7090d470-5ab9-44d4-af60-50d03df1658c/sudden-change.jpg"
                      width="300"
                      height="300"
                      role="img"
                    />
                    <Link
                      className="nav-link"
                      to="https://healthmanagement.org/c/imaging/post/building-resilience-in-children-during-covid-19"
                    >
                      <h5>Building Resilience in Children during COVID-19</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
export default Blogs;
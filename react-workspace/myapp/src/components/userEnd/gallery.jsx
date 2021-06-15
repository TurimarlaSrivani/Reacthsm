import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Gallery extends Component {
  state = {};
  render() {
    return (
      <div className="text-center">
        <div className="page-nav row">
          <div className="container">
            <div class="row,text-center  ">
              <br />
              <h1>Gallery</h1>
            </div>
            <div class="album py-5 ">
              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col">
                  <div class="card shadow-sm">
                    <img
                      src=" https://www.smarteyeapps.com/demo/single-page-hospitapl/assets/images/gallery/gallery_01.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <br />
                  </div>
                </div>

                <div class="col">
                  <div class="card shadow-sm">
                    <img
                      src="https://www.smarteyeapps.com/demo/single-page-hospitapl/assets/images/gallery/gallery_05.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                </div>

                <div class="col">
                  <div class="card shadow-sm">
                    <img
                      src="https://www.smarteyeapps.com/demo/single-page-hospitapl/assets/images/gallery/gallery_02.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                </div>

                <div class="col">
                  <div class="card shadow-sm">
                    <img
                      src="https://www.smarteyeapps.com/demo/single-page-hospitapl/assets/images/gallery/gallery_04.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                </div>

                <div class="col">
                  <div class="card shadow-sm">
                    <img
                      src="https://www.smarteyeapps.com/demo/single-page-hospitapl/assets/images/gallery/gallery_03.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                </div>

                <div class="col">
                  <div class="card shadow-sm">
                    <img
                      src="https://www.smarteyeapps.com/demo/single-page-hospitapl/assets/images/gallery/gallery_06.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
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

export default Gallery;
import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { NavLink } from "react-router-dom";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="text-justify">
        <div className="page-nav row text-center">
          <div className="container">
            <div class="row, text-center ">
              <br />
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
        <hr className="featurette-divider"></hr>

        <div class="row featurette">
          <div class="col-md-7">
            <div className="w-75 mx-auto">
              <form style={{ fontSize: "20px" }}>
                <h3>Contact Form</h3>
                <div class="col-sm-3">
                  <label> Name </label>
                </div>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  name="text"
                  placeholder="Enter Your Name"
                  autoFocus
                  required
                />
                <br />

                <div class="col-sm-3">
                  <label> Email </label>
                </div>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  name="text"
                  placeholder="Enter Your Email"
                  required
                />
                <br />

                <div className="col-sm-3">
                  <label>Message</label>
                </div>
                <textarea
                  rows="5"
                  placeholder="Enter Your Message"
                  class="form-control input-sm"
                  required
                ></textarea>
                <br />

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
                <br />
                <br />
              </form>
            </div>
          </div>

          <div class="col-md-5 order-md-3">
            <br />
            <h3>Address</h3>
            <br />
            <div style={{ fontSize: "20px" }}>
              <p>
                Building TA, Anthonia Street,
                <br />
                3rd main road, 5th cross ,Campus 6D Whitefield Rd,
                <br />
                Brookefield, Bangalore - 560066
                <br />
                Karnataka, India <br />
                Phone:+91 9159669599 <br />
                Email:support@hsmhospital.com <br />
                Website:www.hsmhospital.com
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="row margin">
          <Map
            google={this.props.google}
            style={{ height: 700 }}
            initialCenter={{
              lat: 12.9716,
              lng: 77.5946,
            }}
            zoom={15}
            onClick={this.onMapClicked}
          >
            <Marker onClick={this.onMarkerClick} name={"Current location"} />

            <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC2Br34e8Ogd_eveaY8mz_eR_AqrMYwG-U",
})(Contact);
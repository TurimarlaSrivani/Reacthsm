import React, { Component } from "react";
import DoctorService from "../services/doctorService";

class AddDoctor extends Component {
  state = {
    //Creation of doctor object
    doctor: {
      doctorId: "",
      doctorName: "",
      contactNumber: "",
      hoursOfAvailability: "",
      specialization: "",
      degree: "",
      yearsOfExperience: "",
      doctorFee: "",
    },
  };
 //Handling the submission and pushing the code to database
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
    DoctorService.createDoctor(this.state.doctor).then((res) => {
      this.props.history.push("/doctors");
    });
  };
  //Handling the changes of the doctor form
  handleChange = (event) => {
    const doctor = { ...this.state.doctor };
    doctor[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ doctor });
  };
  render() {
    //Creation of form for add doctor
    return (
      <div className="w-50 mx-auto">
        <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
            <label htmlFor="doctorId" className="form-label">
              Doctor Id
            </label>
            <input
              type="doctorId"
              className="form-control"
              id="doctorId"
              name="doctorId"
              value={this.state.doctor.doctorId}
              onChange={this.handleChange}
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label htmlFor="doctorName" className="form-label">
              Doctor Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="doctorName"
              value={this.state.doctor.doctorName}
              onChange={this.handleChange}
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contactNumber" className="form-label">
                contact Number
            </label>
            <input
              type="contactNumber"
              className="form-control"
              id="contactNumber"
              name="contactNumber"
              value={this.state.doctor.contactNumber}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="hoursOfAvailability" className="form-label">
                 hours Of Availability
            </label>
            <input
              type="hoursOfAvailability"
              className="form-control"
              id="hoursOfAvailability"
              name="hoursOfAvailability"
              value={this.state.doctor.hoursOfAvailability}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="specialization" className="form-label">
            specialization
            </label>
            <input
              type="specialization"
              className="form-control"
              id="specialization"
              name="specialization"
              value={this.state.doctor.specialization}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="degree" className="form-label">
            degree
            </label>
            <input
              type="degree"
              className="form-control"
              id="degree"
              name="degree"
              value={this.state.doctor.degree}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="yearsOfExperience" className="form-label">
            years Of Experience
            </label>
            <input
              type="yearsOfExperience"
              className="form-control"
              id="yearsOfExperience"
              name="yearsOfExperience"
              value={this.state.doctor.yearsOfExperience}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="doctorFee" className="form-label">
             Doctor Fee
            </label>
            <input
              type="doctorFee"
              className="form-control"
              id="doctorFee"
              name="doctorFee"
              value={this.state.doctor.doctorFee}
              onChange={this.handleChange}
            />
          </div>
          {/* Button to submit the  details of doctor */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddDoctor;
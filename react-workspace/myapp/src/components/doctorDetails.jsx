import React, { Component } from "react";
import DoctorService from "../services/doctorService";

class DoctorDetails extends Component {
  state = {
    //Creation of doctor object
    doctor: {
        doctorName: "",
        contactNumber: "",
        hoursOfAvailability: "",
        specialization: "",
        degree: "",
        yearsOfExperience: "",
        doctorFee: "",
    },
  };
  
  //Calling response for getDoctorById
  componentDidMount() {
    DoctorService.getDoctorById(this.props.match.params.doctorId).then(
      (res) => this.setState({ doctor: res.data })
    );
  }

  //Handling the changes of the doctor form
  handleChange = (event) => {
    event.preventDefault();
    const doctor = this.state.doctor;
    doctor[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ doctor });
  };
  
  //Handling the submission and pushing the code to database
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.doctor);
    DoctorService.updateDoctor(
      this.props.match.params.doctorId,
      this.state.doctor
    ).then((res) => {
      this.props.history.push("/doctors");
    });
  };

  render() {
    //Creation of form for update doctor
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
          <h1>{this.props.match.params.doctorId}</h1>

          <div className="mb-3">
            <label htmlFor="doctorName" className="form-label">
              doctor Name
            </label>
            <input
              type="text"
              className="form-control"
              id="doctorName"
              name="doctorName"
              value={this.state.doctor.doctorName}
              onChange={this.handleChange}
              autoFocus
            />
          </div>

          <div className="mb-3">
            <label htmlFor="contactNumber" className="form-label">
                Contact Number
            </label>
            <input
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
              className="form-control"
              id="yearsOfExperience"
              name="yearsOfExperience"
              value={this.state.doctor.yearsOfExperience}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="doctorFee" className="form-label">
            doctor Fee
            </label>
            <input
              type="text"
              className="form-control"
              id="doctorFee"
              name="doctorFee"
              value={this.state.doctor.doctorFee}
              onChange={this.handleChange}
            />
          </div>
          {/* Button for updating the  details of doctor */}
          <button type="submit" className="btn btn-primary float-right">
            Save
          </button>
          {/* Button to cancel the  details of doctor */}
          <button
            className="btn btn-secondary mr-2 float-right"
            onClick={() => {
              this.props.history.push("/doctors");
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default DoctorDetails;
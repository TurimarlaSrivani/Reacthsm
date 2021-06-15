import React, { Component } from "react";
import DoctorService from "../services/doctorService";
import { Link } from "react-router-dom";
import _ from "lodash";

class Doctors extends Component {
  state = {
    doctors: [],
    sortColumn: { path: "title", order: "asc" },
    search: "",
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
  componentDidMount() {
    DoctorService.getAllDoctors().then((res) => {
      console.log("data: ", res.data);
      this.setState({ doctors: res.data });
    });
    console.log("doctors: ", this.state.doctors);
  }
  deleteDoctor = (doctorId) => {
    console.log("Delete doctor with ID: " + doctorId);
    const doctors = this.state.doctors.filter(
      (doctor) => doctor.doctorId !== doctorId
    );
    this.setState({ doctors });
    DoctorService.deleteDoctor(doctorId);
  };
  viewDoctor = () => {
    let doctors = [];
    DoctorService.getDoctorById(this.state.search).then((res) => {
      console.log("**data: ", res.data);
      doctors = res.data;
    });
    this.setState({ doctors });
    console.log("** viewDoctor" + this.state.doctor);
  };

  handleSort = (path) => {
    console.log(path);
    this.setState({ sortColumn: { path, order: "asc" } });
  };

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };

  render() {
    const { search, sortColumn, doctors } = this.state;
    var sorted = [];
    if (search) {
      sorted = doctors.filter((doctor) => doctor.doctorId === search);
    } else {
      sorted = _.orderBy(
        this.state.doctors,
        [sortColumn.path],
        [sortColumn.order]
      );
    }
    console.log(this.state.doctors);
    console.log("Sorted..", sorted);
    return (
      <div className="w-75 mt-5 mx-auto">
        <div className="d-flex justify-content-between">
          <Link to="/doctors/addDoctor" className="btn btn-secondary btn-large mb-1">Add</Link>
          
        </div>
        <div>
          <h3 className="text-center" style={{ fontFamily: "sans-serif" }}>
            Doctor List
          </h3>
        </div>

        <table className="table mt-3 shadow">
          <thead className="table-dark">
            <tr>
              <th onClick={() => this.handleSort("doctorName")}>
                Doctor Name
              </th>
              <th onClick={() => this.handleSort("contactNumber")}>
              Contact No
              </th>
              <th onClick={() => this.handleSort("hoursOfAvailability")}>Availability(hrs)</th>
              <th onClick={() => this.handleSort("specialization")}>
              Specialization
              </th>
              <th onClick={() => this.handleSort("degree")}>Degree</th>
              <th onClick={() => this.handleSort("yearsOfExperience")}>Experience(yrs)</th>
              <th onClick={() => this.handleSort("doctorFee")}>Doctor Fee</th>
                
              <th colSpan="3">Action</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((doctor) => (
              <tr key={doctor.doctorId}>
                <td>{doctor.doctorName}</td>
                <td>{doctor.contactNumber}</td>
                <td>{doctor.hoursOfAvailability}</td>
                <td>{doctor.specialization}</td>
                <td>{doctor.degree}</td>
                <td>{doctor.yearsOfExperience}</td>
                <td>{doctor.doctorFee}</td>
                <td>
                  <Link to={`/doctors/updateDoctor/${doctor.doctorId}`}>
                    <button className="btn btn-secondary ml-0">Update</button>
                  </Link>

                  <button
                    className="btn btn-danger ml-0 mt-1"
                    onClick={() => this.deleteDoctor(doctor.doctorId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Doctors;
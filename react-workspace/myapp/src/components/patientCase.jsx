import React, { Component } from "react";
import PatientCaseService from "../services/patientCaseService";
import{Link} from "react-router-dom";
import _ from "lodash";

class PatientCase extends Component {
    state = {
      //Creation of PatientCase list
        patientCases: [],
        sortColumn:{path:"title",order:"asc"},
        search: "",
        patientCase: {
            medicines: "",
            associateDoctorName: "",
            medicineFee: "",
            appointmentDate: "",
            diseaseDescription: "",
            currentTreatment: "",
            patientId: "",
        }
    };
    //Calling response for showAllPatientCase
    componentDidMount() {
        PatientCaseService.showAllPatientCase().then((res)=> {
          console.log("data: ", res.data);
          this.setState({ patientCases: res.data });
        });
        console.log("patientCases: ", this.state.patientCases);
    }
    //Delete PatientCase by patientcaseid
     deletePatientCase = (patientCaseId) => {
         console.log("Delete patientCase with id:" +patientCaseId);
         const patientCases = this.state.patientCases.filter(
            (patientCase) => patientCase.patientCaseId !== patientCaseId
         );
         this.setState({ patientCases });
         PatientCaseService.deletePatientCase(patientCaseId);
     };
     //Get patientCaseById
     viewPatientCase = () => {
         let patientCases = [];
         PatientCaseService.getPatientCaseById(this.state.search).then((res) => {
             console.log("**data:" , res.data);
             patientCases = res.data;
         });
         this.setState({ patientCases });
         console.log("** viewPatientCase" + this.state.patientCase);
     };

     handleSort = (path) => {
         console.log(path);
         this.setState({ sortColumn: {path,order: "asc"} });
     };

     onChange = (event) => {
         console.log(event.target.value);
         this.setState({ search: event.target.value });
     };

     render() {
       //sorting PatientCase by patientcaseId
        const { search, sortColumn,patientCases } = this.state;
        var sorted = [];
        if (search) {
          sorted = patientCases.filter((patientCase) => patientCase.patientCaseId ==search); } else {
          sorted = _.orderBy(
            this.state.patientCases,
            [sortColumn.path], 
            [sortColumn.order]
            );
        }
        console.log(this.state.patientCases);
        console.log("Sorted..", sorted);
        return (
          //form for PatientCase to search,add,update, delete
          <div className="w-75 mt-5 mx-auto">
            <div className="d-flex justify-content-between">
              <Link to="/patientCase/add" className="btn btn-secondary btn-large mb-1">
                Add
              </Link>
              <form class="form-inline my-2 my-lg-0">
                <input
                  className="form-control ml-auto"
                  type="search"
                  placeholder="Search by Id"
                  aria-label="Search"
                  onChange={this.onChange}
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="button"
                  onClick={this.viewPatientCase}
                >
                  Search
                </button>
              </form>
            </div>
            <div>
          <h3 className="text-center" style={{ fontFamily: "sans-serif" }}>
            Patient Case List
          </h3>
        </div>
    
            <table className="table mt-3 shadow">
              <thead className="table-dark">
                <tr>
                  <th onClick={() => this.handleSort("medicines")}>
                    Medicines
                  </th>
                
                  <th onClick={() => this.handleSort("associateDoctorName")}>
                    Ass. Doctor Name
                  </th>
                  <th onClick={() => this.handleSort("medicineFee")}>
                  Medicine Fee
                  </th>
                  <th onClick={() => this.handleSort("appointmentDate")}>
                    Appointment
                  </th>
                  <th onClick={() => this.handleSort("diseaseDescription")}>
                    Disease
                  </th>
                  <th onClick={() => this.handleSort("currentTreatment")}>
                    Treatment
                  </th>
                  <th onClick={() => this.handleSort("patientId")}>
                    PatientID
                  </th>
                  
    
                  <th colSpan="3">Action</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((patientCase) => (
                  <tr key={patientCase.patientCaseId}>
                    <td>{patientCase.medicines} </td>
                    <td>{patientCase.associateDoctorName}</td>
                    <td>{patientCase.medicineFee}</td>
                    <td>{patientCase.appointmentDate}</td>
                    <td>{patientCase.diseaseDescription}</td>
                    <td>{patientCase.currentTreatment}</td>
                    <td>{patientCase.patientId}</td>

                    <td>
                      <Link to={`/patientCase/updatePatientCase/${patientCase.patientCaseId}`}>
                        {/* Button to update the PatientCase  */}
                        <button className="btn btn-secondary ml-1">Update</button>
                      </Link>
                      {/* Button to delete the PatientCase  */}
                      <button
                        className="btn btn-danger ml-1 mt-1"
                        onClick={() => this.deletePatientCase(patientCase.patientCaseId)}
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
    export default PatientCase;
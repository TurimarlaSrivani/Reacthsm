import React, { Component } from "react";
import PatientHistoryService from "../services/patientHistoryService";
import _ from "lodash";
import { Link }from "react-router-dom";

class PatientHistory extends Component {
    state={
        patient_history:[],
        sortColumn: { path: "title", order: "asc" },
        search: "",
        history: {
            patientHistoryId: "",
            recordedDate: "",
          },
    };

    componentDidMount(){
        PatientHistoryService.getAllPatientHistory().then((res) => {
            console.log("data: ", res.data);
            this.setState({ patient_history: res.data });
          });
          console.log("patient_history: ", this.state.patient_history);
        

    }

    deletePatientHistory = (id) => {
        console.log("Delete history with id: " + id);
        const patient_history = this.state.patient_history.filter(
          (history) => history.patientHistoryId !== id
        );
        this.setState({ patient_history });
        PatientHistoryService.deletePatientHistory(id);
      };
    
      viewPatientHistory = () => {
        let patient_history = [];
        PatientHistoryService.findByRecordedDate(this.state.search).then((res) => {
          console.log("**data: ", res.data);
          patient_history = res.data;
        });
        this.setState({ patient_history });
        console.log("** viewPatientHistory" + this.state.history);
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
      
        const { search, sortColumn, patient_history } = this.state;
        var sorted = [];
        if (search) {
          sorted = patient_history.filter((history) => history.recordedDate == search);
        } 
        else {
          sorted = _.orderBy(
            this.state.patient_history,
            [sortColumn.path],
            [sortColumn.order]
          );
        }
        console.log(this.state.patient_history);
        
        console.log("Sorted..", sorted);
        return (
          <div className="w-75 mt-5 mx-auto">
            <div className="d-flex justify-content-between">
              <Link to="/history/add" className="btn btn-secondary btn-large mb-1">
                Add
              </Link>
              <form class="form-inline my-2 my-lg-0">
                <input
                  className="form-control ml-auto"
                  type="date"
                  placeholder="Search by Date"
                  aria-label="Search"
                  onChange={this.onChange}
                />
                {/* <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="button"
              onClick={this.viewPatient}>
              Search
            </button> */}
                
              </form>
            </div>
    
            <h2 className="text-center">Patient History List</h2>
            <table className="table mt-3">
              <thead className="table-dark">
                <tr>
                  <th onClick={() => this.handleSort("patientId")}>Patient Name</th>
                  <th onClick={() => this.handleSort("diseaseId")}>Disease Name</th>
                  <th onClick={() => this.handleSort("dietId")}>Diet Type</th>
                  <th onClick={() => this.handleSort("recordedDate")}>Recorded Date</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                { sorted.map((history) => (
                 <tr key={history.patientHistoryId}>
                 <td>{history.patient.patientName}</td>
                 <td>{history.disease.diseaseName}</td>
                 <td>{history.diet.dietType}</td>
                 <td>{history.recordedDate}</td>
                 <td>
                   <Link to={`/history/${history.patientHistoryId}`}>
                     <button className="btn btn-secondary">Update</button>
                   </Link>
 
                   <button
                     className="btn btn-danger ml-2"
                     onClick={() => this.deletePatientHistory(history.patientHistoryId)}>
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
    export default PatientHistory;
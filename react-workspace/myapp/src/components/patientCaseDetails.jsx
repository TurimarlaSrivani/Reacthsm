import React, { Component }from "react";
import PatientCaseService from "../services/patientCaseService";

class PatientCaseDetails extends Component{
    state = {
        //Creation of patientCase object
        patientCase: {
            
            medicines: "",
            associateDoctorName: "",
            medicineFee: "",
            appointmentDate: "",
            diseaseDescription: "",
            currentTreatment: "",
            patientId: "",
        },
     };
     //Calling response for getpatientCaseById
    componentDidMount(){
        PatientCaseService.getPatientCaseById(this.props.match.params.patientCaseId).then((res)=>
         this.setState({ patientCase:res.data })
        ); 
    } 
    //Handling the changes of the patientCase form
    handleChange=(event)=>{
        event.preventDefault();
        const patientCase=this.state.patientCase;
        patientCase[event.currentTarget.name]=event.currentTarget.value;
        this.setState({ patientCase });
    };
    //Handling the submission and pushing the code to database
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.patientCase);
        PatientCaseService.updatePatientCase(
            this.props.match.params.patientCaseId,
            this.state.patientCase
            ).then((res)=>{
            this.props.history.push("/patientCase");
        });
    };
    render(){
         //Creation of form for update patientCase
        return(
            <div>
              <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
                  <h1>{this.props.match.params.patientCaseId}</h1>
                  
                  <div className="mb-3">
                      <label htmlFor="medicines" className="form-label">
                          Medicines
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="medicines"
                        name="medicines"
                        value={this.state.patientCase.medicines}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="associateDoctorName" className="form-label">
                          associate DoctorName
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="associateDoctorName"
                        name="associateDoctorName"
                        value={this.state.patientCase.associateDoctorName}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="medicineFee" className="form-label">
                      medicine Fee
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="medicineFee"
                        name="medicineFee"
                        value={this.state.patientCase.medicineFee}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="appointmentDate" className="form-label">
                      appointment Date
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="appointmentDate"
                        name="appointmentDate"
                        value={this.state.patientCase.appointmentDate}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="diseaseDescription" className="form-label">
                      disease Description
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="diseaseDescription"
                        name="diseaseDescription"
                        value={this.state.patientCase.diseaseDescription}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="currentTreatment" className="form-label">
                      current Treatment
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="currentTreatment"
                        name="currentTreatment"
                        value={this.state.patientCase.currentTreatment}
                        onChange={this.handleChange}
                      />  
                  </div>
                  <div className="mb-3">
                      <label htmlFor="patientId" className="form-label">
                      patient Id
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="patientId"
                        name="patientId"
                        value={this.state.patientCase.patientId}
                        onChange={this.handleChange}
                      />  
                  </div>
                  {/* Button for updating the  details of patientCase */}
                  <button type="submit" className="btn btn-primary float-right">
                      Save
                  </button>
                  {/* Button to cancel the  details of patientCase */}
                  <button
                    className="btn btn-secondary mr-2 float-right"
                    onClick={()=>{
                        this.props.history.push("/patientCase");
                    }}
                  >
                    Cancel
                  </button>
              </form>
            </div>
        );
    }
}

export default PatientCaseDetails;
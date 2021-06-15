import React, { Component } from 'react';
import PatientCaseService from "../services/patientCaseService";


class AddPatientCase extends Component{
    state={
       //Creation of patientCase object
        patientCase:{
            patientCaseId: "",
            medicines: "",
            associateDoctorName: "",
            medicineFee: "",
            appointmentDate: "",
            diseaseDescription: "",
            currentTreatment: "",
            patientId: "",

        },
    };
    //Handling the submission and pushing the code to database
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log("Submitted");
        PatientCaseService.addPatientCase(this.state.patientCase).then((res)=>{
            this.props.history.push("/patientCase");

        });
    };
     //Handling the changes of the patientCase form
    handleChange=(event)=>{
        const patientCase={...this.state.patientCase};
        //dynamically handling event changes
        patientCase[event.currentTarget.name]=event.currentTarget.value;
        this.setState({patientCase});
    };
    render(){
      //Creation of form for add patientCase
        return(
            <div className="w-50 mx-auto">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="patientCaseId" className="form-label">
                            PatientCase Id
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="id"
                          name="patientCaseId"
                          value={this.state.patientCase.patientCaseId}
                          onChange={this.handleChange}
                          autoFocus
                        />
                    </div> 
            <div className= "mb-3">            
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
                          autoFocus
                        />
                    
            </div>
            <div className= "mb-3">            
                       <label htmlFor="associateDoctorName" className="form-label">
                            Associate DoctorName
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="associateDoctorName"
                          name="associateDoctorName"
                          value={this.state.patientCase.associateDoctorName}
                          onChange={this.handleChange}
                          autoFocus
                        />
                    
            </div>
            <div className= "mb-3">            
                       <label htmlFor="medicineFee" className="form-label">
                            Medicine Fee
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="medicineFee"
                          name="medicineFee"
                          value={this.state.patientCase.medicineFee}
                          onChange={this.handleChange}
                          autoFocus
                        />
                    
            </div>
            <div className= "mb-3">            
                       <label htmlFor="appointmentDate" className="form-label">
                            Appointment Date
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="appointmentDate"
                          name="appointmentDate"
                          value={this.state.patientCase.appointmentDate}
                          onChange={this.handleChange}
                          autoFocus
                        />
                    
            </div>
            <div className= "mb-3">            
                       <label htmlFor="diseaseDescription" className="form-label">
                            Disease Description
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="description"
                          name="diseaseDescription"
                          value={this.state.patientCase.diseaseDescription}
                          onChange={this.handleChange}
                          autoFocus
                        />
                    
            </div>
            <div className= "mb-3">            
                       <label htmlFor="currentTreatment" className="form-label">
                            Current Treatment
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="currentTreatment"
                          name="currentTreatment"
                          value={this.state.patientCase.currentTreatment}
                          onChange={this.handleChange}
                          autoFocus
                        />
                    
            </div>
            <div className= "mb-3">            
                       <label htmlFor="patientId" className="form-label">
                            Patient Id
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="patientid"
                          name="patientId"
                          value={this.state.patientCase.patientId}
                          onChange={this.handleChange}
                          autoFocus
                        />
                    
                     </div>
                    {/* Button to submit the  details of patientCase */}
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>     
                </form>
            </div>
        );
    }
}

export default AddPatientCase;
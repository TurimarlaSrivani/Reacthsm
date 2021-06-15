import React, { Component } from "react";
import PatientHistoryService from "../services/patientHistoryService";
import PatientService from "../services/patientService";
import DietService from "../services/dietService";
import DiseaseService from "../services/diseaseService";

class CreatePatientHistory extends Component {
  state = {
    //Creation of patientHistory object
    patient_history: [],
    patients: [],
    diets: [],
    diseases: [],
    ids: {
      patientHistoryId: "",
      recordedDate: "",
      patientId: "",
      diseaseId: "",
      dietId: "",
    },
    history: {
      patientHistoryId: "",
      recordedDate: "",
      patient: {},
      disease: {},
      diet: {},
    },
  };

  componentDidMount() {
    //Calling response for getAllPatients
    PatientService.getAllPatients().then((res) => {
      console.log("data: ", res.data);
      this.setState({ patients: res.data });
    });
    console.log("patients: ", this.state.patients);
    //Calling response for showAllDiet
    DietService.showAllDiet().then((res) => {
      console.log("data: ", res.data);
      this.setState({ diets: res.data });
    });
    console.log("diets: ", this.state.diets);
    //Calling response for getAllDiseases
    DiseaseService.getAllDiseases().then((res) => {
      console.log("data: ", res.data);
      this.setState({ diseases: res.data });
    });
    console.log("diseases: ", this.state.diseases);
  }
  //Handling the submission and pushing the code to database
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");

    PatientService.getPatientById(this.state.ids.patientId).then((res) => {
      console.log("data: ", res.data);
      const history = { ...this.state.history, patient: res.data };
      this.setState({ history });
    });

    DiseaseService.getDiseaseById(this.state.ids.diseaseId).then((res) => {
      console.log("data: ", res.data);
      const history = { ...this.state.history, disease: res.data };
      this.setState({ history });
    });

    DietService.viewDiet(this.state.ids.dietId).then((res) => {
      console.log("data: ", res.data);
      const history = { ...this.state.history, diet: res.data };

      history.patientHistoryId = this.state.ids.patientHistoryId;
      history.recordedDate = this.state.ids.recordedDate;
      console.log(history);

      PatientHistoryService.addPatientHistory(history).then((res) => {
        this.props.history.push("/history");
      });
    });
  };
  //Handling the changes of the patientHistory form
  handleChange = (event) => {
    const ids = { ...this.state.ids };
    // dynamically handling event changes
    console.log(event.currentTarget.name, event.currentTarget.value);
    ids[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ ids });
  };
  render() {
    //Dropdown for mapping values of patients, diseases,diet
    let patients = this.state.patients;
    let diseases = this.state.diseases;
    let diets = this.state.diets;

    let optionItemsPatient = patients.map((patient) => (
      <option value={patient.patientId}>{patient.patientName}</option>
    ));

    let optionItemsDisease = diseases.map((disease) => (
      <option value={disease.diseaseId}>{disease.diseaseName}</option>
    ));

    let optionItemsDiet = diets.map((diet) => (
      <option value={diet.dietId}>{diet.dietType}</option>
    ));

    //Creation of form for add patientHistory
    return (
      <div className="w-50 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="patientHistoryId" className="form-label">
              Patient History Id
            </label>
            <input
              type="text"
              className="form-control"
              id="patientHistoryId"
              name="patientHistoryId"
              value={this.state.ids.patientHistoryId}
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="recordedDate" className="form-label">
              Recorded Date
            </label>
            <input
              type="date"
              className="form-control"
              id="recordedDate"
              name="recordedDate"
              value={this.state.ids.recordedDate}
              onChange={this.handleChange}
              autoFocus
            />
          </div>

          <div className="mb-3">
            <label htmlFor="patientId" className="form-label">
              Patient Name
            </label>
            <select
              id="patientId"
              name="patientId"
              className="form-control"
              onChange={this.handleChange}
            >
              <option value="">Select</option>
              {optionItemsPatient}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="diseaseId" className="form-label">
              Disease Name
            </label>
            <select
              id="diseaseId"
              name="diseaseId"
              className="form-control"
              onChange={this.handleChange}
            >
              <option value="">Select</option>
              {optionItemsDisease}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="dietId" className="form-label">
              Diet Type
            </label>
            <select
              id="dietId"
              name="dietId"
              className="form-control"
              onChange={this.handleChange}
            >
              <option value="">Select</option>
              {optionItemsDiet}
            </select>
          </div>
          {/* Button to submit the  details of patientHistory */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreatePatientHistory;
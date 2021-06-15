import React, { Component } from "react";
import PatientHistoryService from "../services/patientHistoryService";
import PatientService from "../services/patientService";
import DietService from "../services/dietService";
import DiseaseService from "../services/diseaseService";

class HistoryDetails extends Component {
  state = {
    //Creation of patientHistory list
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
    //Creation of patientHistory object
    history: {
      patientHistoryId: "",
      recordedDate: "",
      patient: {},
      disease: {},
      diet: {},
    },
  };
  //Calling response for findByPatientHistoryId
  componentDidMount() {
    PatientHistoryService.findByPatientHistoryId(
      this.props.match.params.id
    ).then((res) => {
      console.log(res.data);
      this.setState({ history: res.data });
    });
    //Calling response for getAllPatients
    PatientService.getAllPatients().then((res) => {
      console.log("data: ", res.data);
      this.setState({ patients: res.data });
    });
    console.log("patients: ", this.state.patients);

    //Calling response for viewAllDiet
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
  //Handling the changes of the patientHistory form
  handleChange = (event) => {
    event.preventDefault();
    const ids = this.state.ids;
    // dynamically handling event changes
    console.log(event.currentTarget.name, event.currentTarget.value);
    ids[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ ids });
  };
  //Handling the submission and pushing the code to database
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.history);

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

      history.patientHistoryId = this.props.match.params.id;
      history.recordedDate = this.state.ids.recordedDate;
      console.log(history);
      PatientHistoryService.updatePatientHistory(
        this.props.match.params.id,
        history
      ).then((res) => {
        this.props.history.push("/history");
      });
    });
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

    return (
      //Creation of form for update patientHistory
      <div>
        <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
          <h1>{this.props.match.params.id}</h1>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Recorded Date
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="recordedDate"
              value={this.state.ids.recordedDate}
              onChange={this.handleChange}
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
              {optionItemsDiet}
            </select>
          </div>
          {/* Button for updating the  details of patientHistory */}
          <button type="submit" className="btn btn-primary float-right">
            Save
          </button>
          {/* Button to cancel the  details of patientHistory */}
          <button
            className="btn btn-secondary mr-2 float-right"
            onClick={() => {
              this.props.history.push("/history");
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default HistoryDetails;
import React, { Component } from "react";
import DiseaseService from "../services/diseaseService";

class DiseaseDetails extends Component {
  state = {
    //Creation of disease object
    disease: {
      diseaseId: "",
      diseaseName: "",
      diseaseType: "",
      diseaseSymptoms: "",
    },
  };
  //Calling response for getDiseaseById
  componentDidMount() {
    DiseaseService.getDiseaseById(this.props.match.params.id).then((res) =>
      this.setState({ disease: res.data })
    );
  }

  //Handling the changes of the disease form
  handleChange = (event) => {
    event.preventDefault();
    const disease = this.state.disease;
    disease[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ disease });
  };
  //Handling the submission and pushing the code to database
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.disease);
    DiseaseService.updateDisease(
      this.state.disease,
      this.props.match.params.id
    ).then((res) => {
      this.props.history.push("/diseases");
    });
  };
  render() {
    //Creation of form for update disease
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
          <h1>{this.props.match.params.id}</h1>
          <div className="mb-3">
            <label htmlFor="diseaseId" className="form-label">
              Id
            </label>
            <input
              type="text"
              className="form-control"
              id="Id"
              name="diseaseId"
              value={this.state.disease.diseaseId}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="diseaseName" className="form-label">
              Disease Name
            </label>
            <input
              type="text"
              className="form-control"
              id="Name"
              name="diseaseName"
              value={this.state.disease.diseaseName}
              aria-describedby="diseaseNameHelp"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="diseaseType" className="form-label">
              Disease Type
            </label>
            <input
              type="text"
              className="form-control"
              id="Type"
              name="diseaseType"
              value={this.state.disease.diseaseType}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="diseaseSymptoms" className="form-label">
              Disease Symptoms
            </label>
            <input
              type="text"
              className="form-control"
              id="Symptoms"
              name="diseaseSymptoms"
              value={this.state.disease.diseaseSymptoms}
              onChange={this.handleChange}
            />
          </div>
          {/* Button for updating the  details of disease */}
          <button type="submit" className="btn btn-primary float-right">
            Save
          </button>
          {/* Button to cancel the  details of disease */}
          <button
            className="btn btn-secondary mr-2 float-right"
            onClick={() => {
              this.props.history.push("/diseases");
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default DiseaseDetails;
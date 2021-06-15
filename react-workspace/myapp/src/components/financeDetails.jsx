import React, { Component } from "react";
import FinanceService from "../services/financeService";

class FinanceDetails extends Component {
  state = {
     //Creation of finance list
    finance: {
      patientName: "",
      registrationFee: "",
      doctorFee: "",
      medicinesAmount: "",
      totalFee: "",
    },
  };
  //Calling response for findByFinanceId
  componentDidMount() {
    FinanceService.findByFinanceId(this.props.match.params.financeId).then(
      (res) => this.setState({ finance: res.data })
    );
  }
  //Handling the changes of the finance form
  handleChange = (event) => {
    event.preventDefault();
    const finance = this.state.finance;
    finance[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ finance });
  };
  //Calling response for update finance
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.finance);
    FinanceService.updateFinance(
      this.props.match.params.financeId,
      this.state.finance
    ).then((res) => {
      this.props.history.push("/finance");
    });
  };

  render() {
    //Creation of form for update finance
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
          <h1>{this.props.match.params.financeId}</h1>

          <div className="mb-3">
            <label htmlFor="patientName" className="form-label">
              Patient Name
            </label>
            <input
              type="text"
              className="form-control"
              id="patientName"
              name="patientName"
              value={this.state.finance.patientName}
              onChange={this.handleChange}
              autoFocus
            />
          </div>

          <div className="mb-3">
            <label htmlFor="registrationFee" className="form-label">
              Registration Fee
            </label>
            <input
              type="text"
              className="form-control"
              id="registrationFee"
              name="registrationFee"
              value={this.state.finance.registrationFee}
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="doctorFee" className="form-label">
              Doctor Fee
            </label>
            <input
              type="text"
              className="form-control"
              id="doctorFee"
              name="doctorFee"
              value={this.state.finance.doctorFee}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="medicinesAmount" className="form-label">
              Medicines Amount
            </label>
            <input
              type="text"
              className="form-control"
              id="medicinesAmount"
              name="medicinesAmount"
              value={this.state.finance.medicinesAmount}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="totalFee" className="form-label">
              Total Fee
            </label>
            <input
              type="text"
              className="form-control"
              id="totalFee"
              name="totalFee"
              value={this.state.finance.totalFee}
              onChange={this.handleChange}
            />
          </div>
          {/* Button for updating the  details of finance */}
          <button type="submit" className="btn btn-primary float-right">
            Save
          </button>
          {/* Button to cancel the  details of finance */}
          <button
            className="btn btn-secondary mr-2 float-right"
            onClick={() => {
              this.props.history.push("/finance");
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default FinanceDetails;
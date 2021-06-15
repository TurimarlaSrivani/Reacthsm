import React, { Component } from "react";
import PolicyService from "../services/policyService";

class AddPolicy extends Component {
  state = {
    //Creation of policy object
    policy: {
      policyId: "",
      policyName: "",
      createDate: "",
      endDate: "",
      maximumAmount: "",
    },
  };
  //Handling the submission and pushing the code to database
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
    PolicyService.createPolicy(this.state.policy).then((res) => {
      this.props.history.push("/policies");
    });
  };
  //Handling the changes of the policy form
  handleChange = (event) => {
    const policy = { ...this.state.policy };
    // dynamically handling event changes
    policy[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ policy });
  };
  render() {
    //Creation of form for add policy
    return (
      <div className="w-50 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="policyId" className="form-label">
              PolicyId
            </label>
            <input
              type="number"
              className="form-control"
              id="policyId"
              name="policyId"
              value={this.state.policy.policyId}
              onChange={this.handleChange}
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label htmlFor="policyName" className="form-label">
              PolicyName
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="policyName"
              value={this.state.policy.policyName}
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="createDate" className="form-label">
              CreateDate
            </label>
            <input
              type="date"
              className="form-control"
              id="createDate"
              name="createDate"
              value={this.state.policy.createDate}
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="endDate" className="form-label">
              EndDate
            </label>
            <input
              type="date"
              className="form-control"
              id="endDate"
              name="endDate"
              value={this.state.policy.endDate}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="maximumAmount" className="form-label">
              MaximumAmount
            </label>
            <input
              type="number"
              className="form-control"
              id="maximumAmount"
              name="maximumAmount"
              value={this.state.policy.maximumAmount}
              onChange={this.handleChange}
            />
          </div>
          {/* Button to submit the  details of policy */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddPolicy;
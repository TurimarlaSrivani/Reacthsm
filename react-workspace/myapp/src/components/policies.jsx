import React, { Component } from "react";
import PolicyService from "../services/policyService";
import { Link } from "react-router-dom";
import _ from "lodash";

class Policies extends Component {
  state = {
    //Creation of policy list
    policies_: [],
    sortColumn: { path: "title", order: "asc" },
    search: "",
    policy: {
      policyId: "",
      policyName: "",
      createDate: "",
      endDate: "",
      maximumAmount: "",
    },
  };
  //Calling response for getAllPolicies
  componentDidMount() {
    PolicyService.getAllPolicies().then((res) => {
      console.log("data: ", res.data);
      this.setState({ policies_: res.data });
    });
    console.log("policies_: ", this.state.policies_);
  }
  //Delete policy by id
  deletePolicy = (id) => {
    console.log("Delete policy with id: " + id);
    const policies_ = this.state.policies_.filter(
      (policy) => policy.policyId !== id
    );
    this.setState({ policies_ });
    PolicyService.deletePolicy(id);
  };
  //Viewpolicy by Id
  viewPolicy = () => {
    let policies_ = [];
    PolicyService.getByPolicyId(this.state.search).then((res) => {
      console.log("**data: ", res.data);
      policies_ = res.data;
    });
    this.setState({ policies_ });
    console.log("** viewPolicy" + this.state.policy);
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
    //sorting policies by policyId
    const { search, sortColumn, policies_ } = this.state;
    var sorted = [];
    if (search) {
      sorted = policies_.filter((policy) => policy.policyId == search);
    } else {
      sorted = _.orderBy(
        this.state.policies_,
        [sortColumn.path],
        [sortColumn.order]
      );
    }
    console.log(this.state.policies_);
    console.log("Sorted..", sorted);

    return (
      //form for policy to search,add,update, delete
      <div className="w-75 mt-5 mx-auto">
        <div className="d-flex justify-content-between">
          <Link to="/policies/add" className="btn btn-secondary btn-large mb-1">
            Add
          </Link>
          <form class="form-inline my-2 my-lg-0">
            {/* Search the policy by Id  */}
            <input
              className="form-control ml-auto"
              type="search"
              placeholder="Search by Id"
              aria-label="Search"
              onChange={this.onChange}
            />
          </form>
        </div>

        <h2 className="text-center">Policy List</h2>
        <table className="table mt-3 shadow">
          <thead className="table-dark">
            <tr>
              <th onClick={() => this.handleSort("policyName")}>Policy Name</th>
              <th onClick={() => this.handleSort("createDate")}>Create Date</th>
              <th onClick={() => this.handleSort("endDate")}>End Date</th>
              <th onClick={() => this.handleSort("maximumAmount")}>
                Maximum Amount
              </th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((policy) => (
              <tr key={policy.policyId}>
                <td>{policy.policyName} </td>
                <td>{policy.createDate}</td>
                <td>{policy.endDate}</td>
                <td>{policy.maximumAmount}</td>
                <td>
                  <Link to={`/policies/update/${policy.policyId}`}>
                    {/* Button to update the policy  */}
                    <button className="btn btn-secondary">Update</button>
                  </Link>
                  {/* Button to delete the policy  */}
                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => this.deletePolicy(policy.policyId)}
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
export default Policies;
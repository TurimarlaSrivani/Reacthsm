import axios from "axios";
//API for fetching data for policy
const POLICY_API_BASE_URL = "http://localhost:8087/policy-service";

class PolicyService {
  // Fetching data for getAllPolicies
  async getAllPolicies() {
    return await axios.get(POLICY_API_BASE_URL + "/policy");
  }
  // Creating the data to policy
  async createPolicy(policy) {
    return await axios.post(POLICY_API_BASE_URL + "/policy", policy);
  }
  // Fetching data for getByPolicyId
  async getByPolicyId(policyId) {
    return await axios.get(POLICY_API_BASE_URL + "/policy/" + policyId);
  }
  // Updating data for Policy
  async updatePolicy(policy, policyId) {
    return await axios.put(POLICY_API_BASE_URL + "/policy/" + policyId, policy);
  }
  // deleting the policy details
  async deletePolicy(policyId) {
    return await axios.delete(POLICY_API_BASE_URL + "/policy/" + policyId);
  }
}

export default new PolicyService();
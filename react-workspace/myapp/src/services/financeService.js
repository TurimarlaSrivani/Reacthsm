import axios from "axios";
//API for fetching data for finance
const FINANCE_API_BASE_URL = "http://localhost:8087/finance";
class FinanceService {
   // Fetching data for getAllfinance
  async findAllFinanceDetails() {
    return await axios.get(FINANCE_API_BASE_URL);
  }
  // Adding the data to finance
  async createFinance(finance) {
    return await axios.post(FINANCE_API_BASE_URL, finance);
  }
  // Fetching data for getfinanceById
  async findByFinanceId(financeId) {
    return await axios.get(FINANCE_API_BASE_URL + "/" + financeId);
  }
  // Updating data for finance
  async updateFinance(financeId, finance) {
    return await axios.put(FINANCE_API_BASE_URL + "/" + financeId, finance);
  }
 // deleting the finance by id 
  async deleteFinance(financeId) {
    return await axios.delete(FINANCE_API_BASE_URL + "/" + financeId);
  }
}
export default new FinanceService();
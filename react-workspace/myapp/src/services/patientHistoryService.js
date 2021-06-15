import axios from "axios";
//API for fetching data for patientHistory
const HISTORY_API_BASE_URL = "http://localhost:8087/history";

// Fetching data for getAllPatientHistory
class PatientHistoryService {
  async getAllPatientHistory() {
    return await axios.get(HISTORY_API_BASE_URL);
  }
  // Adding the data to patientHistory
  async addPatientHistory(patientHistory) {
    return await axios.post(HISTORY_API_BASE_URL + "/add", patientHistory);
  }
  // Fetching data for findByPatientHistoryId
  async findByPatientHistoryId(patientHistoryId) {
    return await axios.get(HISTORY_API_BASE_URL + "/" + patientHistoryId);
  }
  // Fetching data for findByRecordedDate
  async findByRecordedDate(recordedDate) {
    return await axios.get(HISTORY_API_BASE_URL + "/date/" + recordedDate);
  }
  // Updating data for PatientHistory
  async updatePatientHistory(patientHistoryId, patientHistory) {
    return await axios.put(
      HISTORY_API_BASE_URL + "/" + patientHistoryId,
      patientHistory
    );
  }
  // deleting the patientHistory details
  async deletePatientHistory(patientHistoryId) {
    return await axios.delete(HISTORY_API_BASE_URL + "/" + patientHistoryId);
  }
}
export default new PatientHistoryService();
import axios from "axios";
//API for fetching data for patient
const PATIENT_API_BASE_URL = "http://localhost:8087/patient";

class PatientService {
  // Fetching data for getAllPatients
  async getAllPatients() {
    return await axios.get(PATIENT_API_BASE_URL);
  }
  // Adding the data to patient
  async createPatient(patient) {
    return await axios.post(PATIENT_API_BASE_URL + "/add", patient);
  }
  // Fetching data for getPatientById
  async getPatientById(patientId) {
    return await axios.get(PATIENT_API_BASE_URL + "/id/" + patientId);
  }
  // Updating data for Patient
  async updatePatient(patientId, patient) {
    return await axios.put(PATIENT_API_BASE_URL + "/" + patientId, patient);
  }
  // deleting the patient details
  async deletePatient(patientId) {
    return await axios.delete(PATIENT_API_BASE_URL + "/" + patientId);
  }
}

export default new PatientService();
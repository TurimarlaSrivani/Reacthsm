import axios from "axios";
//API for fetching data for disease
const DISEASE_API_BASE_URL = "http://localhost:8087";

class DiseaseService {
  // Fetching data for getAllDiseases
  async getAllDiseases() {
    return await axios.get(DISEASE_API_BASE_URL + "/disease");
  }
  // Creating the data to diseases
  async createDisease(disease) {
    return await axios.post(DISEASE_API_BASE_URL + "/disease", disease);
  }
  // Fetching data for findByDiseaseName
  async findByDiseaseName(diseaseName) {
    return await axios.get(DISEASE_API_BASE_URL + "/disease/" + diseaseName);
  }
  // Fetching data for getDiseaseById
  async getDiseaseById(diseaseId) {
    return await axios.get(DISEASE_API_BASE_URL + "/disease/id/" + diseaseId);
  }
  // Updating data for Disease
  async updateDisease(disease) {
    return await axios.put(DISEASE_API_BASE_URL + "/disease", disease);
  }
  // deleting the disease details
  async deleteDisease(diseaseId) {
    return await axios.delete(DISEASE_API_BASE_URL + "/disease/" + diseaseId);
  }
}

export default new DiseaseService();
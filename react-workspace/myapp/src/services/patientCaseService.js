import axios from "axios"
//API for fetching data for patientCase
const PATIENTCASE_API_BASE_URL = "http://localhost:8087/patientCase";
class PatientCaseService{
    // Fetching data for getAllPatientCase
    async showAllPatientCase(){
    //return await axios.get(PATIENTCASE_API_BASE_URL + "/all");           
   return await axios.get(PATIENTCASE_API_BASE_URL);       
    }
    
    // Adding the data to patientCase
    async addPatientCase(patientCase){
        //return await axios.get(PATIENTCASE_API_BASE_URL + "/add", patientCase);
        return await axios.post(PATIENTCASE_API_BASE_URL, patientCase);
    }

    // Fetching data for getPatientCaseById
    async getPatientCaseById(patientCaseId){
        return await axios.get(PATIENTCASE_API_BASE_URL + "/"+patientCaseId);
    }
    
     // Updating data for PatientCase
    async updatePatientCase(patientCaseId,patientCase){
    return await axios.put(PATIENTCASE_API_BASE_URL + "/" +patientCaseId, patientCase);
    }

    // deleting the patientCase details
     async deletePatientCase(patientCaseId){
    return await axios.delete(PATIENTCASE_API_BASE_URL + "/"+patientCaseId);
     }
}
export default new PatientCaseService();
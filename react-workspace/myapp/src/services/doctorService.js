import axios from "axios";
//API for fetching data for doctors
const LOCAL_HOST_URL = "http://localhost:8087/doctors";

class DoctorService{
    // Fetching data for getAllDoctors
    async getAllDoctors(){
        return await axios.get(LOCAL_HOST_URL);
    }
    // Adding the data to doctor
    async createDoctor(doctor){
        return await axios.post(LOCAL_HOST_URL,doctor);
    } 
    // Fetching data for getDoctorById
    async getDoctorById(doctorId){
        return await axios.get(LOCAL_HOST_URL+"/"+doctorId);
    }
    // Updating data for doctor
    async updateDoctor(doctorId,doctor){
        return await axios.put(LOCAL_HOST_URL + "/" +doctorId,doctor);
    }
    // deleting the doctor details
    async deleteDoctor(doctorId){
        return await axios.delete(LOCAL_HOST_URL+"/"+doctorId);
    }
}
export default new DoctorService();
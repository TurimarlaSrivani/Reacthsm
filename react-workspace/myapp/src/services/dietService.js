import  axios from "axios"
//API for fetching data for diet
const DIET_API_BASE_URL = "http://localhost:8087/diet";
class DietService{

// Fetching data for showAllDiets
    async showAllDiet() {
  return await axios.get(DIET_API_BASE_URL );
    }

// Adding the data to diet
    async addDiet(diet) {
        return await axios.post(DIET_API_BASE_URL, diet);
      }
    
    // Fetching data for viewDiet
      async viewDiet(dietId) {
          return await axios.get(DIET_API_BASE_URL + "/"  + dietId);
      }
      // Updating data for Diet
      async updateDiet(dietId, diet){
          return await axios.put(DIET_API_BASE_URL + "/" + dietId, diet);
      }
    
    // deleting the diet details
      async deleteDiet(dietId) {
          return await axios.delete(DIET_API_BASE_URL + "/" + dietId);
      }
    }
    

export default new DietService();
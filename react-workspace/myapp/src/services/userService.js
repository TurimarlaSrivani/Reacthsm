import axios from "axios";
//API for fetching data for user
const USER_API_BASE_URL = "http://localhost:8087";

class UserService{
    // Fetching data for getAllUser
    async getAllUsers(){
        return await axios.get(USER_API_BASE_URL + "/user");
    }
   // deleting the user details
   async deleteUserByUserId(userid){
        return await axios.delete(USER_API_BASE_URL + "/user/" + userid);
    }
    // Adding the data to user
    async createUser(user){
    return await axios.post(USER_API_BASE_URL+"/user",user);
    }
    // Updating data for user
    async updateUser(user,userid){
        return await axios.put(USER_API_BASE_URL+"/user/update/"+userid,user);
    }
    //View all user data
    async viewUser(userid){
        return await axios.get(USER_API_BASE_URL+"/user/"+userid);
    }
    //User login
     async login(loginentity){
         return await axios.post(USER_API_BASE_URL+"/login",loginentity);
    }  
    //user logout
     async logout(userid){
         return await axios.get(USER_API_BASE_URL+"/logout"+userid);
    }          
            
}
export default new UserService();
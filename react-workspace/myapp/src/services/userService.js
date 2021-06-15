import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8087";

class UserService{
    async getAllUsers(){
        return await axios.get(USER_API_BASE_URL + "/user");
    }
   
   async deleteUserByUserId(userid){
        return await axios.delete(USER_API_BASE_URL + "/user/" + userid);
    }
    async createUser(user){
    return await axios.post(USER_API_BASE_URL+"/user",user);
    }
    async updateUser(user,userid){
        return await axios.put(USER_API_BASE_URL+"/user/update/"+userid,user);
        }
    async viewUser(userid){
            return await axios.get(USER_API_BASE_URL+"/user/"+userid);
            }

            async login(loginentity){
                return await axios.post(USER_API_BASE_URL+"/login",loginentity);
           }  
        async logout(userid){
                   return await axios.get(USER_API_BASE_URL+"/logout"+userid);
           }          
            
}
export default new UserService();
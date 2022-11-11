import axios from 'axios'

class UserService {
    login(user){
        return axios.post('http://localhost:9991/login',user
        ).then((response) => {
            return response.data;
          });
    }

    logout() {
        // localStorage.removeItem("user");
      }
    
    register(user) {
        return axios.post('http://localhost:9991/register', user).then((response)=>{
          return response.data;
        });
    }
}

export default UserService;
import axios from "axios";
import AuthHeader from "../../Authentication/Service/AuthHeader";

class UserProfileService {
    updateWeight(weight){
        return axios.put('http://localhost:9991/fitness/customer/weight',weight,{ headers: AuthHeader() })
        .then((response) =>{ 
            return response.data;
        })
        .catch((e)=>{
            alert(e.response.data.message);
        })
    }
    updateHeight(height){
        return axios.put('http://localhost:9991/fitness/customer/height',height,{ headers: AuthHeader() })
        .then((response) =>{    
            return response.data;
        })
        .catch((e)=>{
            alert(e.response.data.message);
        })
    }
    updateEmail(email){
        return axios.put('http://localhost:9991/fitness/customer/email',email,{ headers: AuthHeader() })
        .then((response) =>{   
            return response.data;
        })
        .catch((e)=>{
            alert(e.response.data.message);
        })
    }


                
}
export default UserProfileService;
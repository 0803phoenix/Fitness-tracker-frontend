import axios from 'axios'
import AuthHeader from '../../Authentication/Service/AuthHeader';

class AdminService{

    getAllCustomers(){
        // console.log("hi");
        return axios.get("http://localhost:9991/fitness/admin/customers",
        {headers:AuthHeader()})
        .then((response)=>{
            // console.log("in Response")
            return response.data;
        })
    }
    getCustomerById(username){
        return axios.get(`http://localhost:9991/fitness/admin/customer/${username}`,
        {headers:AuthHeader()})
        .then((response)=>{
            return response.data;
        })
    }
    deleteCustomerById(username){
        console.log("In Delete method");
        return axios.delete(`http://localhost:9991/fitness/admin/customer/${username}`,{headers:AuthHeader()})
        .then(()=>{console.log("Deleted Successfully")})
    }
}
export default AdminService;
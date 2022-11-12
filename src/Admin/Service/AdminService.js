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
}
export default AdminService;
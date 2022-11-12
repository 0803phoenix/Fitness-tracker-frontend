import axios from 'axios'
import AuthHeader from '../../Authentication/Service/AuthHeader';

class AdminService{

    getAllCustomers(){
        return axios.get("http://localhost:9991/fitness/admin/customers",
        {headers:AuthHeader()})
        .then((response)=>{
            return response.data;
        })
    }
}
export default AdminService;
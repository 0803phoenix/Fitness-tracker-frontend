import axios from 'axios'
import AuthHeader from './../../Authentication/Service/AuthHeader';

class CustomerService {
    addCustomer(userDetails){
        return axios.post('http://localhost:9991/fitness/customer',userDetails,
        {headers:AuthHeader()})
        .then((response) =>{
            return response.data;
        });
    }
}
export default CustomerService;
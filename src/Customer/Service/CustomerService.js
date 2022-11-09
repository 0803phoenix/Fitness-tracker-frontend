import axios from 'axios'


class CustomerService {
    customer(customers){
        return axios.post('http://localhost:9991/fitness/customer',customers)
        .then((response) =>{
            alert(JSON.stringify(response.data));
            return response.data;
        })
    }
}
export default CustomerService;
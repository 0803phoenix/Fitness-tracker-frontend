import axios from 'axios'


class CustomerService {
    customer(userDetails){
        const jwtStr = sessionStorage.getItem("currentUser");
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+jwtStr
          }
        return axios.post('http://localhost:9991/fitness/customer',userDetails,
        {header:headers})
        .then((response) =>{
            alert(JSON.stringify(response.data));
            return response.data;
        });
    }
}
export default CustomerService;
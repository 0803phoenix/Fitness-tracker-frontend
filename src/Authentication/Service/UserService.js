import axios from "axios";
import { ScrollRestoration } from "react-router-dom";
import AuthHeader from './AuthHeader';

class UserService {
  login(user) {
    // const jwtStr='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJEZXZhbnNoIiwiZXhwIjoxNjY3OTA5OTMxLCJpYXQiOjE2Njc4OTE5MzF9.hQo_2yCyeSAAp6XDF41lh4lM1jcNl278vOqLbHaaLza0Cu3XZVkSW1xF1nRlfERMOt6ujmJ1POwLltgYuOIXMw'
    return axios
      .post(
        "http://localhost:9991/login",
        user
        // 'headers': {
        //       'Authorization': 'Bearer ' + jwtStr
        //     }
      )
      .then((response) => {
        // if (response.data.accessToken) {
        //   localStorage.setItem("user", JSON.stringify(response.data));
        // }
        // alert(JSON.stringify(response.data));
        return response.data;
      });
    }

  logout() {
    // localStorage.removeItem("user");
  }

  registers(user) {
    return axios
      .post("http://localhost:9991/register", user)
      .then((response) => {
        return response.data;
      });
  }

  getCustomer(){
    // alert("in customer  service");
    return axios.get('http://localhost:9991/fitness/customer',
    {headers:AuthHeader()})
    .then((response)=>{
      // alert(JSON.stringify(response.data));
        return response.data;
    }).catch((e)=>{
      // alert(e.response.data.message);
      return e.response.data.status;
    })
}
}

export default UserService;

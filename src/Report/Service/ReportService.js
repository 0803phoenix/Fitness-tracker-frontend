import axios from "axios";
import AuthHeader from "../../Authentication/Service/AuthHeader";

class ReportService {
    getReport(){
        // alert("In service");
        return axios.get('http://localhost:9991/fitness/report',{ headers: AuthHeader() })
        .then((response) =>{
            // alert("In return statement");
            // alert(JSON.stringify(response.data));
            return response.data;
        })
        .catch((e)=>{
            alert(e.response.data.message);
        })
    }
                
}
export default ReportService;
import axios from "axios";
import AuthHeader from "../../Authentication/Service/AuthHeader";

class ReportService {
    getReport(){
        return axios.get('http://localhost:9991/fitness/report',{ headers: AuthHeader() })
        .then((response) =>{
            return response.data;
        })
    //     .catch((e)=>{
    //         // alert(e.response.data.status);
    //     })
    }
                
}
export default ReportService;
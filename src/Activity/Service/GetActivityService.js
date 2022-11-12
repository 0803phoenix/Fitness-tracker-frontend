import axios from "axios";
import AuthHeader from "../../Authentication/Service/AuthHeader";

class GetActivityService {

    getActivities() {
        return axios.get('http://localhost:9991/fitness/activity',
            { headers: AuthHeader() })
            .then((response) => {
                // alert(JSON.stringify(response.data));
                return response.data;
            });
    }

    getCardio() {
        return axios.get('http://localhost:9991/fitness/activity',
            { headers: AuthHeader() })
            .then(
                (response) => {
                    return response.data;
                });
    }
}

export default GetActivityService;    

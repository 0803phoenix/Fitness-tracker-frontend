import axios from "axios";
import AuthHeader from "../../Authentication/Service/AuthHeader";

class GetActivityService {

    getUrl(activityId) {
        return `http://localhost:9991/fitness/activity/${activityId}`;
    }

    deleteActivityById(activityId) {
        console.log("In Delete method");
        return axios.delete(this.getUrl(activityId), { headers: AuthHeader() })
            .then(() => { console.log("Deleted Successfully") })
            .catch((e) => { alert(e.response.data.message) });
    }
}

export default GetActivityService;    

import axios from "axios";
import AuthHeader from "../../Authentication/Service/AuthHeader";

class ActivityService {

    getActivity() {
        axious.get('http://localhost:9991/fitness/activity', { headers: AuthHeader() }).then
            ((response) => {
                return response.data;
            })
    }

}

export default ActivityService;    

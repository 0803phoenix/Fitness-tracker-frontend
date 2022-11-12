import axios from "axios";
import AuthHeader from './../../Authentication/Service/AuthHeader';

class WorkoutService {
    addWorkout(workoutDetails) {
        return axios.post('http://localhost:9991/fitness/activity/workout', workoutDetails,
            { headers: AuthHeader() })
            .then((response) => {
                return response.data;
            });
    }
}

export default WorkoutService;

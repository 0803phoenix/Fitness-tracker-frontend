import axios from "axios";
import AuthHeader from './../../Authentication/Service/AuthHeader';

class CardioService {
  addCardio(cardioDetails) {
    return axios.post('http://localhost:9991/fitness/activity/cardio', cardioDetails,
      { headers: AuthHeader() })
      .then((response) => {
        return response.data;
      });
  }
}

export default CardioService;

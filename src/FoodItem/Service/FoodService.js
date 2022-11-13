import axios from 'axios'
import AuthHeader from '../../Authentication/Service/AuthHeader';

class FoodService {

    getUrl(dietId, foodId){
        return `http://localhost:9991/fitness/diets/${dietId}/food-items/${foodId}`;
    }



    getFoodItems(){
        console.log("inside get food items");
        return axios.get('http://localhost:9991/fitness/food-items',
        {headers:AuthHeader()})
        .then((response) =>{
            return response.data;
        });
    }

    addFood(dietId,foodId){
        return axios.get(this.getUrl(dietId,foodId),
        {headers:AuthHeader()})
        .then((response)=>{
            return response.data;
        })
    }

    removeFood(dietId,foodId){
        return axios.delete(this.getUrl(dietId,foodId),
        {headers:AuthHeader()})
        .then((response)=>{
            alert(JSON.stringify(response.data));
            return response.data;
        })
    }
}
export default FoodService;
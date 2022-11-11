import axios from 'axios'

class DietService {
    
    getDiets(){
        return axios.get('http://localhost:9991/fitness/diets')
        .then((response) =>{
            alert(JSON.stringify(response.data));
            return response.data;
        })
    }

    addDiet(diet){
        return axios.post('http://localhost:9991/fitness/diets')
        .then((response)=>{
            alert(JSON.stringify(response.data));
            return response.data;
        })
    }

    addFoodItem(){
        
    }
}
export default DietService;
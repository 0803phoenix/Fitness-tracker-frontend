import axios from 'axios'
import AuthHeader from '../../Authentication/Service/AuthHeader';

class DietService {
    
    getDiets(){
        return axios.get('http://localhost:9991/fitness/diets',
        {headers:AuthHeader()})
        .then((response) =>{
            return response.data;
        });
    }

    addDiet(diet){
        return axios.post('http://localhost:9991/fitness/diets',diet,
        {headers:AuthHeader()})
        .then((response)=>{
            return response.data;
        })
    }
}
export default DietService;
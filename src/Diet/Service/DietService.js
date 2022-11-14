import axios from 'axios'
import AuthHeader from '../../Authentication/Service/AuthHeader';

class DietService {
    
    getUrl(dietId){
        return `http://localhost:9991/fitness/diets/${dietId}`;
    }
    
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

    removeDiet(dietId){
        console.log("inside remove diet");
        return axios.delete(this.getUrl(dietId),
        {headers:AuthHeader()})
        .then((response)=>{
            console.log("service called successfully");
            return response.data;
        })
    }
}
export default DietService;
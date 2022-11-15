import DietService from './../../Diet/Service/DietService';

import {ADD_DIET_REQUEST, GET_DIETS_REQUEST,GET_DIETS_SUCCESS,GET_DIETS_FAILURE} from "../Type/dietType"

export const addNewDiet =(diet)=>{
    return { 
        type:ADD_DIET_REQUEST,
        payload:diet
    }
};

export const getDiets = ()=>{
    return {
        type:GET_DIETS_REQUEST
    }
}
export const  getAllDiets = ()=>{
    return (dispatch)=>{
        let service = new DietService();
        service.getDiets()
        .then((result)=>{
            const diet = result;
            // alert(JSON.stringify(diet)+"GetAllDiets");
            dispatch(getDietSuccess(diet))
        })
        .catch((error)=>{
            dispatch(getDietFailure(error.message))
        })
    }
}
export const getDietSuccess = (diet)=>{
    return {type:GET_DIETS_SUCCESS,
            payload:diet}
}

export const getDietFailure = (error)=>{
    return {type:GET_DIETS_FAILURE,
        payload:error}
}

export const addDiet = (diet)=>{
    return (dispatch)=>{
        let service = new DietService();
        service.addDiet(diet)
        .then((result)=>{
            console.log(result);
            const diet1 = result;
            dispatch(addNewDiet(diet1));
            alert("Diet added Successfully");
        })
        .catch((error)=>{
            alert(JSON.stringify(error.response.data.message));
        })
    };
}



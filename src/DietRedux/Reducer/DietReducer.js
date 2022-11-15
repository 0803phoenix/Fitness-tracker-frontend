import {ADD_DIET_REQUEST, GET_DIETS_REQUEST,GET_DIETS_SUCCESS,GET_DIETS_FAILURE} from "../Action/dietType"


const initialState = {
    diet :[],
    error:"",
    flag:false
}

const reducer = (state = initialState, action )=>{
    switch(action.type){
        case ADD_DIET_REQUEST: 
            return {...state, diet:[...state.diet, action.payload]};
        case GET_DIETS_REQUEST:
            return {...state};
        case GET_DIETS_SUCCESS:
            return {...state,diet:action.payload,flag:true};
        case GET_DIETS_FAILURE:
            return {...state,error:action.payload,flag:false};
        default:
            return state;
    }

};
export default reducer;
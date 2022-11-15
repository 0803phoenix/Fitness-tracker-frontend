import { combineReducers } from "redux";
import DietReducer from "./Reducer/DietReducer";

const rootReducer =combineReducers(
    {
        diet: DietReducer
    }
);
export default rootReducer;

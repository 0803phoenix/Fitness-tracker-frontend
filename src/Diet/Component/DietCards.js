import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DietService from "../Service/DietService";
import DietTable from "./DietTable";

const DietCards = () => {
    const[diet,setDiet]=useState([]);
    const navigate = useNavigate(); 
    let service = new DietService;
    const viewDiet = () =>{
        service
        .getDiets()
        .then((result)=>{
            setDiet(result);
        }).catch((error)=>{
            alert(error);
        });

    }
    return (
     <> 
      <div className="card-group px-1 py-1" >
      <div className="card bg-dark text-white m-1" onClick={viewDiet}>
        <img className="card-img" src="https://source.unsplash.com/1400x500/?food" style={{filter: "brightness(50%)"}} alt="Card image"/>
            <div className="card-img-overlay" style={
            {
                position: "absolute",
                top: "40%",
                left: "0",
                width: "100%",
            }
        }>
                <h5 className="card-title" style={{fontSize:"30px", fontWeight:"light"}}>View Existing Diets</h5>
            </div>
      </div>
      <div className="card bg-dark text-white m-1">
        <img className="card-img" src="https://source.unsplash.com/1400x500/?beverage" style={{filter: "brightness(50%)"}} alt="Card image"/>
            <div className="card-img-overlay" style={
            {
                position: "absolute",
                top: "40%",
                left: "0",
                width: "100%",
            }
        }>
                <h5 className="card-title" style={{fontSize:"30px", fontWeight:"light"}}>Create a New Diet</h5>
            </div>
      </div>
      </div>
      {/* <DietTable/> */}
     </>  
    );
  }
  
  export default DietCards;
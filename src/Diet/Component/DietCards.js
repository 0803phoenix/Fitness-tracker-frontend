import { useState } from "react";
import DietService from "../Service/DietService";
import CreateDiet from "./CreateDiet";
import DietTable from "./DietTable";
import Modal from "react-bootstrap/Modal";
import { connect } from 'react-redux';
import {getAllDiets} from '../../DietRedux/Action/DietAction';


const DietCards = (props) => {
    const [show, setShow] = useState(false);
    const [showTable, setShowTable] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[diet,setDiet]=useState([]);
    let service = new DietService();

    
    const viewDiet = () =>{
          props.getAllDiets();
          setShowTable(true);
    }
    return (
     <> 
      <div className="card-group px-1 py-1" >
      <div className="card bg-dark text-white m-1" onClick={viewDiet}>
        <img className="card-img" src="https://source.unsplash.com/1400x500/?food" style={{filter: "brightness(50%)"}} alt="Card"/>
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
      <div className="card bg-dark text-white m-1" onClick={handleShow}>
        <img className="card-img" src="https://source.unsplash.com/1400x500/?beverage" style={{filter: "brightness(50%)"}} alt="Card"/>
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
      <Modal show={show} onHide={handleClose}>
        <CreateDiet />
      </Modal>
      {showTable ?
      <div className="card p-5">
        <div className="card p-3">
            
            {/* {alert("inside table card "+JSON.stringify(props.diet.diet))} */}
            <DietTable data={props.diet.diet}/>
        </div>
      </div>
        :
        null}
      
      
     </>  
    );
  }
  const mapStateToProps = (state)=>{
    // const {diet,flag,error} = state
    return {diet:state.diet,
        flag:state.flag,
        error:state.error
    }
  }
  export default connect(mapStateToProps, {getAllDiets})(DietCards);
  // export default DietCards;
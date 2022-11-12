import React, { useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import FoodService from '../../FoodItem/Service/FoodService';
import Modal from "react-bootstrap/Modal";
import CreateFood from '../../FoodItem/Component/CreateFood';
import { useNavigate } from 'react-router-dom';

function MealTable(props) {

    const[foodItem, setFoodItem] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => {
      setShow(false);
      navigate("/diet");
    }
  
    let service = new FoodService();
    const navigate = useNavigate();
    const handleFood = () => {
        service
        .getFoodItems()
        .then((response)=>{
          console.log(response);
          setFoodItem(response);
          setShow(true);
        }).catch((error)=>{
          alert(error)
        })
    }
    const columns=[
      {
        dataField:"mealId",
        text:"Id",
      },
      {
        dataField:"foodName",
        text:"Food item"
      },
      {
        dataField:"foodQuantity",
        text:"Quantity"
      },
      {
        dataField:"caloriesInFood",
        text:"Calories"
      },
    ]

    return (
    <> 
      <div className="card p-3 m-2 border-info">
      <BootstrapTable 
        keyField="mealId" 
        data={props.data} 
        columns={columns} />
      </div>
      <button type="button" class="btn btn-primary " onClick={handleFood}>Add Food item</button>
      <Modal show={show} onHide={handleClose}>
        {/* <CreateDiet /> */}
        {console.log("in modal")}
        <CreateFood foodItems={foodItem} onHide={handleClose} diet={props.diet}/>
      </Modal>
      
    </>    
  )
}

export default MealTable
import React, { useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import FoodService from '../../FoodItem/Service/FoodService';
import Modal from "react-bootstrap/Modal";
import CreateFood from '../../FoodItem/Component/CreateFood';
import { useNavigate } from 'react-router-dom';
import DietService from '../Service/DietService';

function MealTable(props) {

    const[foodItem, setFoodItem] = useState([]);
    const [show, setShow] = useState(false);
    
    const dietService =new DietService();
    
    const deleteDiet = () => {
      dietService
      .removeDiet(props.diet)
      .then(()=>{
        alert("Diet deleted successfully");
        window.location.reload();
      })
    }
    
    
    const handleClose = () => {
      setShow(false);
      navigate("/diet");
      window.location.reload();
    }

    let service = new FoodService();
    const handleDelete = (foodId) => {
      console.log(foodId);
      service
      .removeFood(props.diet,foodId)
      .then((response)=>{
        alert("Deleted Successfully")
        window.location.reload();
      })
    };
  
    
    const navigate = useNavigate();
    const handleFood = () => {
        service
        .getFoodItems()
        .then((response)=>{
          setFoodItem(response);
          setShow(true);
        }).catch((error)=>{
          alert(error)
        })
    }
    const columns=[
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
      {
        text: '',
        formatter: (row) => {
          return (
            <button
              className="btn btn-danger btn-xs"
              onClick={() => handleDelete(row.foodId)}
            >
              Delete
            </button>
          );
        },
        editable:false
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
      <button type="button" className="btn btn-primary m-2 " onClick={handleFood}>Add Food item</button>
      <button type="button" className="btn btn-info " onClick={deleteDiet}>Delete Diet</button>
      <Modal show={show} onHide={handleClose}>
        <CreateFood foodItems={foodItem} onHide={handleClose} diet={props.diet}/>
      </Modal>
      
    </>    
  )
}

export default MealTable
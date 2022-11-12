import React, { useEffect, useRef } from 'react'
import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FoodService from '../Service/FoodService';

function CreateFood(props) {
    const [food, setFood] = useState({
        fooditemId: 0,
        dietId: 0,
    });
    
    const handleFood = (e) =>{
      
        props.foodItems.map((item)=>{
          if (e.target.value==item.foodName){
            setFood({
              dietId:props.diet,
              fooditemId:item.foodId,
            });
          }
        })
        
    }
    
    const navigate = useNavigate();
    const service = new FoodService();

    return (
    <>
    {console.log("inside createfood render")}
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Add Food Item</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <div className="form-group">
            <label>Food Item</label>
            <input type="text" list="data" onChange={handleFood}/>

             <datalist id="data" >
            {
                props.foodItems.map((item) =>
        
                <option key={item.foodId} value={item.foodName} />
            )}
            </datalist>
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary"
          onClick={
            (e) => {
              e.preventDefault();
              console.log("button clicked");
              service
                .addFood(food.dietId,food.fooditemId)
                .then((result) => {
                  console.log(result)
                  navigate("/diet");
                  alert("diet added successfully");
                })
                .catch((error) => {
                  console.log(error);  
                  alert("Unable To add Diet");
                })
            }}>
          Add Food Item
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  </>
  )
}

export default CreateFood;
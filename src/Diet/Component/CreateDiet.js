import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddDietDto from '../Model/AddDietDto';
import DietService from '../Service/DietService';

function CreateDiet() {
    
    const [createDiet, setCreateDiet] = useState({
        dayOfWeek: 'SUNDAY',
        consumeTime: 'BREAKFAST',
    });
    // const handleInputs = (e) =>{
    //     setCreateDiet( {[e.target.name]: e.target.value} )
    // }

    const handleConsume = (e) =>{
        console.log(e.target.value);
        setCreateDiet({...createDiet,consumeTime:e.target.value});
    }

    const handleDay = (e) =>{
        console.log(e.target.value);
        setCreateDiet({...createDiet,dayOfWeek:e.target.value});
    }
    
    const navigate = useNavigate();
    const service = new DietService(); 

    return (
    <>
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Create Diet</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <div className="form-group">
            <label>Consume Time</label>
            <select className="form-control" name="consumeTime" value={createDiet.consumeTime} onChange={handleConsume}>
                <option value="BREAKFAST">BREAKFAST</option>
                <option value="BRUNCH">BRUNCH</option>
                <option value="LUNCH">LUNCH</option>
                <option value="SNACKS">SNACKS</option>
                <option value="DINNER">DINNER</option>
                <option value="FASTING">FASTING</option>
              </select>
          </div>
          <div className="form-group">
            <label>Day of Week</label>
            <select className="form-control" name="dayOfWeek" value={createDiet.dayOfWeek} onChange={handleDay}>
                <option value="SUNDAY">SUNDAY</option>
                <option value="MONDAY">MONDAY</option>
                <option value="TUESDAY">TUESDAY</option>
                <option value="WEDNESDAY">WEDNESDAY</option>
                <option value="THURSDAY">THURSDAY</option>
                <option value="FRIDAY">FRIDAY</option>
                <option value="SATURDAY">SATURDAY</option>
              </select>
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary"
          onClick={
            (e) => {
              e.preventDefault();
              console.log(createDiet);
              service
                .addDiet(createDiet)
                .then((result) => {
                  console.log(result)
                  navigate("/diet");
                  alert("diet added successfully");
                })
                .catch((error)=>{
                  alert(JSON.stringify(error.response.data));
              })
            }}>
          Create
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  </>
  )
}

export default CreateDiet;
import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DietService from '../Service/DietService';
import {connect} from "react-redux";
import {addDiet} from '../../DietRedux/Action/DietAction';

function CreateDiet(props) {
    
    const [createDiet, setCreateDiet] = useState({
        dayOfWeek: 'SUNDAY',
        consumeTime: 'BREAKFAST',
    });

    const handleConsume = (e) =>{
        setCreateDiet({...createDiet,consumeTime:e.target.value});
    }

    const handleDay = (e) =>{
        setCreateDiet({...createDiet,dayOfWeek:e.target.value});
    }
    const handleCreate = (e) => {
      e.preventDefault();  
        props.addDiet(createDiet);
          navigate("/diet");
          window.location.reload();
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
          onClick={handleCreate}>
          Create
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  </>
  )
}
//Redux Part
const mapDispatchToProps =(dispatch)=>{
  return {
    addDiet:(createDiet)=>{
      dispatch(addDiet(createDiet));
    }
  }
}
export default connect(null,mapDispatchToProps)(CreateDiet);
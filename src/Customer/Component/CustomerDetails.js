import { useState } from "react";
import Customer from "./../Model/Customer";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CustomerService from "../Service/CustomerService";

function CustomerDetails() {
  const [userDetails, setUserDetails] = useState({ details: new Customer() });
  const navigate = useNavigate();
  let service = new CustomerService();

  const handleFirstName = (e)=>{
    setUserDetails({details: {...userDetails, firstName: e.target.value }});
  }
  const handleLastName = (e)=>{
    setUserDetails({details: {...userDetails, lastName: e.target.value }});
  }
  const handleEmail = (e)=>{
    setUserDetails({details: {...userDetails, email: e.target.value }});
  }
  const handleGender = (e)=>{
    setUserDetails({details: {...userDetails, gender: e.target.value }});
  }
  const handleBodyType = (e)=>{
    setUserDetails({details: {...userDetails, bodyType: e.target.value }});
  }
  const handleActivityStatus = (e)=>{
    setUserDetails({details: {...userDetails, active: e.target.value }});
  }
  const handleWeight = (e)=>{
    setUserDetails({details: {...userDetails, weight: e.target.value }});
  }
  const handleHeight = (e)=>{
    setUserDetails({details: {...userDetails, height: e.target.value }});
  }
  const handleAge = (e)=>{
    setUserDetails({details: {...userDetails, age: e.target.value }});
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    service.customer(userDetails.details)
    .then((result)=>{
      console.log(JSON.stringify(result));
      navigate("/homeLoggedIn");
    })
  }

  return (
    <>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form>
            <div className="form-group">
              <label>First Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your first name"
                value={userDetails.details.firstName}
                onChange={handleFirstName}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your last name"
                value={userDetails.details.lastName}
                onChange={handleLastName}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="Enter your email"
                value={userDetails.details.userEmail}
                onChange={handleEmail}
              />
            </div>
            <div className="form-group">
              <label >Gender</label>
              <select class="form-control" value={userDetails.details.gender} onChange={handleGender}>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>
            <div className="form-group">
              <label>Weight</label>
              <input
                className="form-control"
                type="number"
                placeholder="Enter your Weight"
                value={userDetails.details.weight}
                onChange={handleWeight}
              />
            </div>
            <div className="form-group">
              <label>Height in cm</label>
              <input
                className="form-control"
                type="number"               
                placeholder="Enter your Height"
                value={userDetails.details.height}
                onChange={handleHeight}
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                className="form-control"
                type="number"
                placeholder="Enter your age"
                value={userDetails.details.age}
                onChange={handleAge}
              />
            </div>
            <div className="form-group">
              <label >Body Type</label>
              <select class="form-control" value={userDetails.details.bodyType} onChange={handleBodyType}>
                <option>ENDOMORPH</option>
                <option>EXOMORPH</option>
                <option>MESOMORPH</option>
              </select>
            </div>
            <div className="form-group">
              <label >Active Status</label>
              <select class="form-control" value={userDetails.details.active} onChange={handleActivityStatus}>
                <option>True</option>
                <option>false</option>
              </select>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleSubmit}>
            save
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
}

export default CustomerDetails;

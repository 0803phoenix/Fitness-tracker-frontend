import { useState } from "react";
import Customer from "./../Model/Customer";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CustomerService from "../Service/CustomerService";

function CustomerDetails() {

  const [userDetails, setUserDetails] = useState( new Customer() );
  const navigate = useNavigate();
  let service = new CustomerService();

  const handleFirstName = (e)=>{
    setUserDetails({...userDetails, firstName: e.target.value });
  }
  const handleLastName = (e)=>{
    setUserDetails({...userDetails, lastName: e.target.value });
  }
  const handleEmail = (e)=>{
    setUserDetails({...userDetails, userEmail: e.target.value });
  }
  const handleGender = (e)=>{
    setUserDetails({...userDetails, gender: e.target.value });
  }
  const handleBodyType = (e)=>{
    setUserDetails({...userDetails, bodyType: e.target.value });
  }
  const handleActivityStatus = (e)=>{
    setUserDetails({...userDetails, active: e.target.value });
  }
  const handleWeight = (e)=>{
    setUserDetails({...userDetails, weight: e.target.value });
  }
  const handleHeight = (e)=>{
    setUserDetails({...userDetails, height: e.target.value });
  }
  const handleAge = (e)=>{
    setUserDetails({...userDetails, age: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    service.addCustomer(userDetails)
    .then((result)=>{
      // sessionStorage.setItem('customerDetails',JSON.stringify(userDetails));
      navigate("/");
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
                name="firstName"
                placeholder="Enter your first name"
                value={userDetails.firstName}
                onChange={handleFirstName}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                className="form-control"
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={userDetails.lastName}
                onChange={handleLastName}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                name="userEmail"
                placeholder="Enter your email"
                value={userDetails.userEmail}
                onChange={handleEmail}
              />
            </div>
            <div className="form-group">
              <label >Gender</label>
              <select className="form-control" name="gender" value={userDetails.gender} onChange={handleGender}>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
              </select>
            </div>
            <div className="form-group">
              <label>Weight</label>
              <input
                className="form-control"
                type="number"
                name="weight"
                placeholder="Enter your Weight"
                value={userDetails.weight}
                onChange={handleWeight}
              />
            </div>
            <div className="form-group">
              <label>Height in cm</label>
              <input
                className="form-control"
                type="number" 
                name="height"              
                placeholder="Enter your Height"
                value={userDetails.height}
                onChange={handleHeight}
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                className="form-control"
                type="number"
                name="age"
                placeholder="Enter your age"
                value={userDetails.age}
                onChange={handleAge}
              />
            </div>
            <div className="form-group">
              <label >Body Type</label>
              <select className="form-control" name="bodyType" value={userDetails.bodyType} onChange={handleBodyType}>
                <option value="ENDOMORPH">ENDOMORPH</option>
                <option value="ECTOMORPH">ECTOMORPH</option>
                <option value="MESOMORPH">MESOMORPH</option>
              </select>
            </div>
            <div className="form-group">
              <label >Active Status</label>
              <select className="form-control" name="active" value={userDetails.active} onChange={handleActivityStatus}>
                <option value={true}>True</option>
                <option value={false}>false</option>
              </select>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={handleSubmit}>
            save
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
}

export default CustomerDetails;
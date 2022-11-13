import { useState } from "react";
import Customer from "./../Model/Customer";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CustomerService from "../Service/CustomerService";
import { useForm } from "react-hook-form"

function CustomerDetails() {

  const { register,formState:{errors}, handleSubmit} = useForm();
  const [userDetails, setUserDetails] = useState( new Customer() );
  const navigate = useNavigate();
  let service = new CustomerService();
  let b1=errors;
  const onSubmit=(data) => 
  {
    //setUserInfo(data);
    console.log(data);
  }

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

  const handleSubmitFunc = (e) => {
    //e.preventDefault();
    if(!(b1===errors))
    {
      service.addCustomer(userDetails)
    .then((result)=>{
      navigate("/homeLoggedIn");
    })
    }
  }

  return (
    <>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>First Name</label>
              <input
                className="form-control"
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                {...register('firstName',{required:true})}
                value={userDetails.firstName}
                onChange={handleFirstName}
              />
            </div>
            <p style={{color:'red'}}>{errors.firstName?.type==="required" && "First Name is required"}</p>
            <div className="form-group">
              <label>Last Name</label>
              <input
                className="form-control"
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                {...register('lastName',{required:true})}
                value={userDetails.lastName}
                onChange={handleLastName}
              />
            </div>
            <p style={{color:'red'}}>{errors.lastName?.type==="required" && "Last Name is required"}</p>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                name="userEmail"
                placeholder="Enter your email"
                {...register('userEmail',{required:true,
                pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})}
                value={userDetails.userEmail}
                onChange={handleEmail}
              />
            </div>
            <p style={{color:'red'}}>{errors.userEmail?.type==="required" && "Email is required"}
            <p style={{color:'red'}}>{errors.userEmail?.type==="pattern" && "Enter valid Email"}</p>
            </p>
            
            <div className="form-group">
              <label >Gender</label>
              <select className="form-control" name="gender" value={userDetails.gender} onChange={handleGender}>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
                {/* <option value="OTHERS">Others</option> */}
              </select>
            </div>
            <div className="form-group">
              <label>Weight</label>
              <input
                className="form-control"
                type="number"
                name="weight"
                placeholder="Enter your Weight"
                {...register('weight',{required:true})}
                value={userDetails.weight}
                onChange={handleWeight}
              />
            </div>
            <p style={{color:'red'}}>{errors.weight?.type==="required" && "Weight is required"}</p>
            
            <div className="form-group">
              <label>Height in cm</label>
              <input
                className="form-control"
                type="number" 
                name="height"              
                placeholder="Enter your Height"
                {...register('height',{required:true})}
                value={userDetails.height}
                onChange={handleHeight}
              />
            </div>
            <p style={{color:'red'}}>{errors.height?.type==="required" && "Height is required"}</p>
            
            <div className="form-group">
              <label>Age</label>
              <input
                className="form-control"
                type="number"
                name="age"
                placeholder="Enter your age"
                {...register('age',{required:true})}
                value={userDetails.age}
                onChange={handleAge}
              />
            </div>
            <p style={{color:'red'}}>{errors.age?.type==="required" && "Age is required"}</p>
            
            <div className="form-group">
              <label >Body Type</label>
              <select className="form-control" name="bodyType" value={userDetails.bodyType} onChange={handleBodyType}>
                <option value="ENDOMORPH">ENDOMORPH</option>
                <option value="EXOMORPH">EXOMORPH</option>
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
            <Modal.Footer>
          <Button variant="success" onClick={handleSubmitFunc}>
            save
          </Button>
        </Modal.Footer>
          </form>

        </Modal.Body>

        
      </Modal.Dialog>
    </>
  );
}

export default CustomerDetails;
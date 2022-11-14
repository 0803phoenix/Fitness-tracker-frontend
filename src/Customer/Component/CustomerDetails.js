import { useState } from "react";
import Customer from "./../Model/Customer";
import userDto from "./../../Authentication/Model/UserDto";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CustomerService from "../Service/CustomerService";
import { useForm } from "react-hook-form";
function CustomerDetails() {

  const {register, formState:{errors}, handleSubmit }=useForm();
  console.log(errors);
  let b=errors;
  const [user, setUser] = useState({ reg: new userDto() });
  const onSubmit=(data) =>{
    console.log(data);
  }
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

  const handleSubmit1 = (e) => {
    e.preventDefault();
    service.addCustomer(userDetails)
    .then((result)=>{
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>First Name</label>
              <input
                className="form-control"
                type="text"
                name="firstName"
                {...register("firstName",{required: true})}
                placeholder="Enter your first name"
                value={userDetails.firstName}
                onChange={handleFirstName}
              />
            </div>
            <p style={{color:"red"}}>{errors.firstName?.type==="required" && "First Name is required"}</p>
            
            <div className="form-group">
              <label>Last Name</label>
              <input
                className="form-control"
                type="text"
                name="lastName"
                {...register("lastName",{required: true})}
                placeholder="Enter your last name"
                value={userDetails.lastName}
                onChange={handleLastName}
              />
            </div>
            <p style={{color:"red"}}>{errors.lastName?.type==="required" && "Last Name is required"}</p>
            
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                name="userEmail"
                {...register("userEmail",{required: true})}
                placeholder="Enter your email"
                value={userDetails.userEmail}
                onChange={handleEmail}
              />
            </div>
            <p style={{color:"red"}}>{errors.userEmail?.type==="required" && "Email is required"}</p>
            
            <div className="form-group">
              <label >Gender</label>
              <select className="form-control" name="gender" {...register("gender",{required: true})} value={userDetails.gender}  onChange={handleGender}>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
                {/* <option value="OTHERS">Others</option> */}
              </select>
            </div>
            <p style={{color:"red"}}>{errors.gender?.type==="required" && "Gender is required"}</p>
            
            <div className="form-group">
              <label>Weight</label>
              <input
                className="form-control"
                type="number"
                name="weight"
                {...register("weight",{required: true,pattern:/^[0-9]{1,}/})}
                placeholder="Enter your Weight"
                value={userDetails.weight}
                onChange={handleWeight}
              />
            </div>
            <p style={{color:"red"}}>{errors.weight?.type==="required" && "Weight is required"}
            {errors.weight?.type==="pattern" && " Enter proper weight in digits"}</p>
            
            <div className="form-group">
              <label>Height in cm</label>
              <input
                className="form-control"
                type="number" 
                name="height"     
                {...register("height",{required: true,pattern:/^[0-9]{1,}/})}         
                placeholder="Enter your Height"
                value={userDetails.height}
                onChange={handleHeight}
              />
            </div>
            <p style={{color:"red"}}>{errors.height?.type==="required" && "Height is required"}
            {errors.height?.type==="pattern" && " Enter proper height"}</p>
            <div className="form-group">
              <label>Age</label>
              <input
                className="form-control"
                type="number"
                name="age"
                {...register("age",{required: true,pattern:/^[0-9]{1,}/})}
                placeholder="Enter your age"
                value={userDetails.age}
                onChange={handleAge}
              />
            </div>
            <p style={{color:"red"}}>{errors.age?.type==="required" && "Age is required"}
            {errors.age?.type==="pattern" && " Enter proper age"}</p>
            <div className="form-group">
              <label >Body Type</label>
              <select className="form-control" name="bodyType" {...register("bodyType",{required: true})} value={userDetails.bodyType} onChange={handleBodyType}>
                <option value="ENDOMORPH">ENDOMORPH</option>
                <option value="EXOMORPH">EXOMORPH</option>
                <option value="MESOMORPH">MESOMORPH</option>
              </select>
            </div>
            <p style={{color:"red"}}>{errors.bodyType?.type==="required" && "BodyType is required"}</p>
            <div className="form-group">
              <label >Active Status</label>
              <select className="form-control" name="active" {...register("active",{required: true,})} value={userDetails.active} onChange={handleActivityStatus}>
                <option value={true}>True</option>
                <option value={false}>false</option>
              </select>
            </div>
            <p style={{color:"red"}}>{errors.active?.type==="required" && "Active Status is required"}</p>
            <Modal.Footer>
          <Button variant="success" type="submit" onClick={(e) =>{

              if((b===errors))
              {
                handleSubmit1();
              }
          }}>
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
import { useState } from "react";
import { useNavigate } from "react-router";
import userDto from "./../Model/UserDto";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UserService from './../Service/UserService';
import { useForm } from "react-hook-form";

function Register() {
  const {register, formState:{errors}, handleSubmit}=useForm();
  console.log(errors);
  let b=errors;
  const [user, setUser] = useState({ reg: new userDto() });
  const onSubmit=(data) =>{
    console.log(data);
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  let service = new UserService();

  return (
    <>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Register YourSelf</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Username</label>
              <input
                className="form-control"
                type="text"
                id="username"
                name="username"
                {...register("username",{required: true})}
                placeholder="Enter User Name"
                value={user.reg.usename}
                
                onChange={(e) =>
                  setUser({ reg: { ...user.reg, username: e.target.value } })
                }
              />
            </div>
            <p style={{color:"red"}}>{errors.username?.type==="required" && "Username is required"}</p>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                {...register("password",{required: true,
                minLength:8,
                maxLength:14,
                pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,})}
                value={user.reg.password}
                onChange={(e) =>
                  setUser({ reg: { ...user.reg, password: e.target.value } })
                }
              />
            </div>
            <p style={{color:"red"}}>
            {errors.password?.type==="minLength" && "Length should be between 8 and 14"}
            {errors.password?.type==="required" && "Password is required"}
            
            {errors.password?.type==="maxLength" && "Length should be between 8 and 14"}
            {errors.password?.type==="pattern" && "It should have at least one number, one symbol, one uppercase and one lower case character"}</p>
            
            <Modal.Footer>
                <Button variant="success" onClick={() => navigate("/login")}>
                   Already a Member
                </Button>
                <Button variant="secondary" type="submit"
                onClick={
                  (e) => {
                    
                   console.log(errors);
                   
               //e.preventDefault();
               // alert(JSON.stringify(user.register));
               if((b===errors))
               {
                console.log("--------");
                console.log(b);
                 service
                 .registers(user.reg)
                 .then((result) => {
                   // console.log("hi")
                   sessionStorage.setItem('currentUser', JSON.stringify(result));
                   navigate("/login");
                 })
                 .catch((error) => {
                   alert(error.response.message);
                 })
               }
             }}>
            Register
          </Button>
        </Modal.Footer>
          </form>
        </Modal.Body>

       
      </Modal.Dialog>
    </>
  );
}

export default Register;

import { useState } from "react";
import { useNavigate } from "react-router";
import userDto from "./../Model/UserDto";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UserService from './../Service/UserService';
import { useForm } from 'react-hook-form';

function Register() {
  const { register,formState:{errors}, handleSubmit} = useForm();
  const [user, setUser] = useState({ reg: new userDto() });
  let b1=errors;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  let service = new UserService();
  const onSubmit=(data) => 
{
  //setUserInfo(data);
  console.log(data);
}
  console.log(errors);
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
                placeholder="Enter User Name"
                {...register('username',{required:true})}
                value={user.reg.usename}
                
                onChange={(e) =>
                  setUser({ reg: { ...user.reg, username: e.target.value } })
                }
              />
              <p style={{color: "red"}}>{errors.username?.type==="required" && "Username is required"}</p>
            </div>
           
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                {...register('password',{required:true,
                minLength:8,
                maxLength:14,
                pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,14})/})}
                value={user.reg.password}
                onChange={(e) =>
                  setUser({ reg: { ...user.reg, password: e.target.value }
                     })
                }
              />
              </div>
              <p style={{color: "red"}}>{errors.password?.type==="required" && "Password is required"}
              {errors.password?.type==="minLength" && "Length should be between 8 and 14"}
              {errors.password?.type==="maxLength" && "Length should be between 8 and 14"}
              </p>
             
              <div>
              <Modal.Footer>
          <Button variant="success" onClick={() => navigate("/login")}>
            Already a Member
          </Button>
          <Button variant="secondary" type="submit" className="button"
          onClick={
            (e) => {
              //e.preventDefault();
              // alert(JSON.stringify(user.register));
              console.log(errors);
              if(!(b1===errors))
              {
                service
                .registers(user.register)
                .then((result) => {
                  // console.log("hi")
                  sessionStorage.setItem('currentUser', JSON.stringify(result));
                  navigate("/login");
                })
                .catch((error) => {
                  alert("Username already exist");
                })
              }
            }}
            >
            Register
          </Button>
        </Modal.Footer>
            </div>
          </form>
        </Modal.Body>

        
      </Modal.Dialog>
    </>
  );
}


export default Register;

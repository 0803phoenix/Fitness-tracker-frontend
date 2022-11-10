import { useState } from "react";
import { useNavigate } from "react-router";
import userDto from "./../Model/UserDto";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import NavBar from "../../Layout/Component/NavBar";
import Footer from './../../Layout/Component/Footer';
import UserService from './../Service/UserService';

function Register() {
  const [user, setUser] = useState({ register: new userDto() });
  const navigate = useNavigate();
  let service = new UserService();

  return (
    <>
    <NavBar/>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Register YourSelf</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Username</label>
              <input
                className="form-control"
                type="text"
                id="username"
                placeholder="Enter User Name"
                value={user.register.usename}
                onChange={(e) =>
                    setUser({ register: { ...user.register, username: e.target.value } })
                }
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                id="password"
                placeholder="Enter Password"
                value={user.register.password}
                onChange={(e) =>
                    setUser({ register: { ...user.register, password: e.target.value } })
                }
              />
              </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={() => navigate("/login")}>
            Already a Member
          </Button>
          <Button variant="secondary" 
                  onClick={
                    (e)=>{
                      e.preventDefault();
                      service
                      .register(user.register)
                      .then((result)=>{
                        sessionStorage.setItem('currentUser',JSON.stringify(result));
                        // sessionStorage.setItem("username", user.login.username);
                        navigate("/customerDetails");
                      })
                      .catch((error)=>{
                        alert("Username already exist");
                      })
          }}>
            Register
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
      <Footer/>
    </>
  );
}

export default Register;

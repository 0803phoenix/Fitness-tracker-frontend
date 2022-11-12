import { useState } from "react";
import { useNavigate } from "react-router";
import userDto from "./../Model/UserDto";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UserService from './../Service/UserService';
import JwtRequest from './../Model/AppUser';

function AdminLogin() {
    const [user, setUser] = useState({ login: new JwtRequest() });
    // const [userDetails, setUserDetails] = useState( new Customer() );
    const navigate = useNavigate();
    let service = new UserService();
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Login As Admin</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <form>
            <div className="form-group ">
              <label>Username</label>
              <input
                className="form-control "
                type="text"
                id="username"
                placeholder="Enter User Name"
                value={user.login.username}
                onChange={(e) =>
                  setUser({
                    login: { ...user.login, username: e.target.value },
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control "
                type="password"
                id="password"
                placeholder="Enter Password"
                value={user.login.password}
                onChange={(e) =>
                  setUser({
                    login: { ...user.login, password: e.target.value },
                  })
                }
              />
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary"
            onClick={(e) => {
                e.preventDefault();
                service
                  .login(user.login)
                  .then((result) => {
                    sessionStorage.setItem("currentUser", JSON.stringify(result));
                    console.log(sessionStorage.getItem("currentUser"));
                    // navigate("/customerDetails");
                    // alert("Hi");
                    // getCustomerDetails();
                    // alert(JSON.stringify(userDetails));
                    // handleShow();
                    navigate("/admin");
                  })
                  .catch((error) => {
                    //alert(error.message);
                    alert("Invalid Username/Password. Please try again!");
                  });
              }}>
            Login
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
}

export default AdminLogin;

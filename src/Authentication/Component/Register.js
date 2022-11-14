import { useState } from "react";
import { useNavigate } from "react-router";
import userDto from "./../Model/UserDto";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UserService from './../Service/UserService';

function Register() {
  const [user, setUser] = useState({ register: new userDto() });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  let service = new UserService();

  return (
    <>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
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
            {error?<p style={{color:"red"}}>{message}</p>:null}
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={() => navigate("/login")}>
            Already a Member
          </Button>
          <Button variant="secondary"
            onClick={
              (e) => {
                e.preventDefault();
                service
                  .register(user.register)
                  .then((result) => {
                    sessionStorage.setItem('currentUser', JSON.stringify(result));
                    navigate("/login");
                  })
                  .catch((error) => {
                    // console.log(error.response.data.message);
                    // alert(JSON.stringify(error.response.data.message));
                    setError(true);
                    setMessage(error.response.data.message);
                  })
              }}>
            Register
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
}

export default Register;
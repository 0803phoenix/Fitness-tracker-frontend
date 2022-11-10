import { useState } from "react";
import Customer from "./../Model/Customer";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CustomerDetails() {
  const [userDetails, setUserDetails] = useState({ details: new Customer() });
  const navigate = useNavigate();

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
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your last name"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <input
                className="form-control"
                type="text"
                placeholder="Gender"
              />
            </div>
            <div className="form-group">
              <label>Weight</label>
              <input
                className="form-control"
                type="number"
                placeholder="Enter your Weight"
              />
            </div>
            <div className="form-group">
              <label>Height in cm</label>
              <input
                className="form-control"
                type="number"               
                placeholder="Enter your Height"
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                className="form-control"
                type="number"
                placeholder="Enter your age"
              />
            </div>
            <div class="form-group">
              <label >Body Type</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>ENDOMORPH</option>
                <option>EXOMORPH</option>
                <option>MESOMORPH</option>
              </select>
            </div>
            <div class="form-group">
              <label >Active Status</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>True</option>
                <option>false</option>
              </select>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => navigate("/home")}>
            save
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
}

export default CustomerDetails;

import { useState } from "react";
import Cardio from "./../Model/Cardio";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CardioService from "../Service/CardioService";

function AddCardio() {
  const [cardioDetails, setCardioDetails] = useState(new Cardio());
  const navigate = useNavigate();
  let service = new CardioService();

  const handleCardioType = (e) => {
    setCardioDetails({ ...cardioDetails, cardioType: e.target.value });
  }
  const handleDistance = (e) => {
    e.preventDefault();
    // (cardioDetails.distance > 100) ? (
    //   setCardioDetails({ ...cardioDetails, distance: e.target.value }))
    //   : (alert("distance too short"));
    setCardioDetails({ ...cardioDetails, distance: e.target.value });
  }
  const handleTimeInMinutes = (e) => {
    setCardioDetails({ ...cardioDetails, timeInMinutes: e.target.value });
  }
  const handleDayOfWeek = (e) => {
    setCardioDetails({ ...cardioDetails, dayOfWeek: e.target.value });
  }
  const handleSuccesFlag = (e) => {
    setCardioDetails({ ...cardioDetails, succesFlag: e.target.value });
  }
  const handleActivityName = (e) => {
    setCardioDetails({ ...cardioDetails, activityName: e.target.value });
  }
  const handleCaloriesBurned = (e) => {
    setCardioDetails({ ...cardioDetails, caloriesBurned: e.target.value });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    service.addCardio(cardioDetails)
      .then((result) => {
        navigate("/activity");
        window.location.reload();
      })
  }

  return (
    <>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Add Cardio Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form>
            <div className="form-group">
              <label >Cardio Type</label>
              <select class="form-control" value={cardioDetails.cardioType} onChange={handleCardioType}>
                <option>RUNNING</option>
                <option>SWIMING</option>
                <option>JOGGING</option>
                <option>CYCLING</option>
                <option>WALKING</option>
              </select>
            </div>
            <div className="form-group">
              <label>Distance</label>
              <input
                className="form-control"
                type="number" required
                placeholder="distance in meters"
                value={cardioDetails.distance}
                onChange={handleDistance}
              />
            </div>
            <div className="form-group">
              <label>timeInMinutes</label>
              <input
                className="form-control"
                type="number"
                placeholder="time taken"
                value={cardioDetails.timeInMinutes}
                onChange={handleTimeInMinutes}
              />
            </div>
            <div className="form-group">
              <label >Day of Week</label>
              <select class="form-control" value={cardioDetails.dayOfWeek} onChange={handleDayOfWeek}>
                <option>MONDAY</option>
                <option>TUESDAY</option>
                <option>WEDNESDAY</option>
                <option>THURSDAY</option>
                <option>FRIDAY</option>
                <option>SATURDAY</option>
                <option>SUNDAY</option>
              </select>
            </div>
            <div className="form-group">
              <label >Success Flag</label>
              <select class="form-control" value={cardioDetails.succesFlag} onChange={handleSuccesFlag}>
                <option>true</option>
                <option>false</option>
              </select>
            </div>

            <div className="form-group">
              <label>Calories Burned</label>
              <input
                className="form-control"
                type="number"
                placeholder="Total Calories you burned"
                value={cardioDetails.caloriesBurned}
                onChange={handleCaloriesBurned}
              />
            </div>

          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={handleSubmit}>
            Save Cardio
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
}

export default AddCardio;

import { useState } from "react";
import { useNavigate } from "react-router";
// import JwtRequest from "./../Model/AppUser";
import CardioService from "../../Activity/Service/CardioService";
import Modal from "react-bootstrap/Modal";
import AddCardio from "../../Activity/Component/AddCardio";
import AddWorkout from "../../Activity/Component/AddWorkout";

export default function ActivityCards() {
  const [isShown, setIsShown] = useState(false);

  const [showC, setShowC] = useState(false);
  const [showW, setShowW] = useState(false);

  const handleCloseC = () => setShowC(false);
  const handleShowC = () => setShowC(true);

  const handleCloseW = () => setShowW(false);
  const handleShowW = () => setShowW(true);

  // const [user, setUser] = useState({ login: new JwtRequest() });
  const navigate = useNavigate();
  let service = new CardioService();

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <div>
      <div className="card-group px-1 py-1">
        <div
          className="card bg-dark text-white m-1"
          onClick={() => alert("Activity List")}
        >
          <img
            className="card-img"
            src="https://source.unsplash.com/1400x500/?bodybuilding"
            style={{ filter: "brightness(50%)" }}
            alt="Card image"
          />
          <div
            className="card-img-overlay"
            style={{
              position: "absolute",
              top: "40%",
              left: "0",
              width: "100%",
            }}
          >
            <h5
              className="card-title"
              style={{ fontSize: "30px", fontWeight: "light" }}
            >
              View Your Activities
            </h5>
          </div>
        </div>

        <div
          className="card bg-dark text-white m-1"
        //   onClick={() => alert("Hello!")}
        >
          <div class="bg-image hover-zoom">
            <img
              className="card-img"
              src="https://source.unsplash.com/1400x500/?gym"
              style={{ filter: "brightness(50%)" }}
              alt="Card image"
            />
          </div>
          <div
            className="card-img-overlay"
            style={{
              position: "absolute",
              top: "20%",
              left: "0",
              width: "100%",
            }}
          >
            {!isShown && (
              <h5
                className="card-title pb-4"
                style={{ fontSize: "30px", fontWeight: "light" }}
              >
                Add New Activity
              </h5>
            )}
            {!isShown && (
              <button
                type="button"
                className="btn btn-outline-light mb-2"
                onClick={handleClick}
              >
                Add
              </button>
            )}
            <br />
            {isShown && (

              <div>
                <button
                  type="button"
                  // onClick={(e) => {
                  //   navigate("/addCardio");

                  // }}
                  onClick={handleShowC}
                  className="btn btn-outline-light   mr-5"
                >
                  Cardio
                </button>
                <button
                  type="button"
                  onClick={handleShowW}
                  className="btn btn-outline-light   ml-5"
                >
                  Workout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>

        {/* <button onClick={handleClick}>Click</button> */}

        {/* {isShown && (
          <div>
            <h2>Some content here</h2>
          </div>
        )}

        {isShown && <Box />} */}
      </div>
      <Modal show={showC} onHide={handleCloseC}>
        <AddCardio />
      </Modal>
      <Modal show={showW} onHide={handleCloseW}>
        <AddWorkout />
      </Modal>
    </div>
  );
}

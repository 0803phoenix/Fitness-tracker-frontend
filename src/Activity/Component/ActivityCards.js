import { useState } from "react";
import { useNavigate } from "react-router";
// import JwtRequest from "./../Model/AppUser";
import GetActivityService from "../Service/GetActivityService"
import Modal from "react-bootstrap/Modal";
import AddCardio from "./AddCardio";
import AddWorkout from "./AddWorkout";
import ActivityTable from "./ActivityTable";
import CardioTable from "./CardioTable";
import WorkoutTable from "./WorkoutTable";

export default function ActivityCards() {
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);

  const cardioActivities = [];
  const workoutActivities = [];

  const segregate = () => {
    cardio.map((item) => {
      item.cardioType != null ? cardioActivities.push(item) : workoutActivities.push(item);
    })
  }

  const [showC, setShowC] = useState(false);
  const [showW, setShowW] = useState(false);

  const handleCloseC = () => setShowC(false);
  const handleShowC = () => setShowC(true);

  const handleCloseW = () => setShowW(false);
  const handleShowW = () => setShowW(true);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  const handleClick2 = (event) => {
    setIsShown2((current) => !current);
  };

  const [activity, setActivity] = useState([]);


  const [cardio, setCardio] = useState([]);
  const [workout, setWorkout] = useState([]);
  const navigate = useNavigate();
  let service = new GetActivityService();


  // const viewActivity = () => {
  //   console.log("in view activity");
  //   service
  //     .getActivities()
  //     .then((result) => {
  //       alert(JSON.stringify(result));
  //       setActivity(result);
  //       result.map((item) => {
  //         console.log(item);
  //         item.activityType != null ? setActivity({
  //           cardio: [item]
  //         }) : setWorkout({
  //           workout: [item]
  //         });

  //         // item.cardioType != null ? setCardio({ ...cardio, item }) : setWorkout({ ...workout, item });

  //       })
  //     }).catch((error) => {
  //       alert(error);
  //     });
  // }

  // console.log(cardio);
  // console.log(workout);


  const viewActivity = () => {
    console.log("in view activity");
    service
      .getActivities()
      .then((result) => {
        alert(JSON.stringify(result));

        console.log(result);
        setActivity(result);
      }).catch((error) => {
        alert(error);
      });
  }

  const viewCardio = () => {
    console.log("in view cardio");
    service
      .getActivities()
      .then((result) => {
        // alert(JSON.stringify(result));

        console.log(result);
        setCardio(result);
      }).catch((error) => {
        alert(error);
      });
  }

  const viewWorkout = () => {
    console.log("in view workout");
    service
      .getActivities()
      .then((result) => {
        // alert(JSON.stringify(result));
        console.log(result);
        setWorkout(result);
      }).catch((error) => {
        alert(error);
      });
  }


  return (
    <div>
      <div className="card-group px-1 py-1">
        <div
          className="card bg-dark text-white m-1"
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
              top: "20%",
              left: "0",
              width: "100%",
            }}
          >
            {!isShown2 && (
              <h5
                className="card-title pb-4"
                style={{ fontSize: "30px", fontWeight: "light" }}
              >
                View Your Activities
              </h5>
            )}
            {!isShown2 && (
              <button
                type="button"
                className="btn btn-outline-light mb-2 "
                // onClick={viewActivity}
                onClick={viewActivity}
              >
                View
              </button>
            )}

            <br />
            {isShown2 && (

              <div>
                <button
                  type="button"

                  onClick={viewCardio}
                  className="btn btn-outline-light   mr-5"
                >
                  Cardio
                </button>
                <button
                  type="button"
                  onClick={viewWorkout}
                  className="btn btn-outline-light   ml-5"
                >
                  Workout
                </button>
              </div>
            )}
          </div>
        </div>



        <div
          className="card bg-dark text-white m-1"
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
                className="btn btn-outline-light mb-2 "
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

      </div>
      <Modal show={showC} onHide={handleCloseC}>
        <AddCardio />
      </Modal>
      <Modal show={showW} onHide={handleCloseW}>
        <AddWorkout />
      </Modal>
      {/* {console.log(activity)} */}



      {!isShown2 && (
        <ActivityTable data={activity} />
      )}

      {isShown2 && (
        <CardioTable data={cardio} />
      )}

      {isShown2 && (
        <WorkoutTable data={workout} />
      )}

    </div>
  );
}

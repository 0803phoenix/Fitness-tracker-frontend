import { useState } from "react";
import Workout from "./../Model/Workout";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import WorkoutService from "../Service/WorkoutService";

function AddWorkout() {
    const [workoutDetails, setworkoutDetails] = useState(new Workout());
    const navigate = useNavigate();
    let service = new WorkoutService();

    const handleWorkoutType = (e) => {
        setworkoutDetails({ ...workoutDetails, workoutType: e.target.value });
    }
    const handleNoOfReps = (e) => {
        setworkoutDetails({ ...workoutDetails, noOfReps: e.target.value });
    }
    const handleDayOfWeek = (e) => {
        setworkoutDetails({ ...workoutDetails, dayOfWeek: e.target.value });
    }
    const handleActivityName = (e) => {
        setworkoutDetails({ ...workoutDetails, activityName: e.target.value });
    }
    const handleCaloriesBurned = (e) => {
        setworkoutDetails({ ...workoutDetails, caloriesBurned: e.target.value });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        service.addWorkout(workoutDetails)
            .then((result) => {
                navigate("/activity");
                window.location.reload();
            })
    }

    return (
        <>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Add Workout Details</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label >Workout Type</label>
                            <select class="form-control" value={workoutDetails.workoutType} onChange={handleWorkoutType}>
                                <option>CHESTWORKOUT</option>
                                <option>BACKWORKOUT</option>
                                <option>LEGSWORKOUT</option>
                                <option>SHOULDERWORKOUT</option>
                                <option>BICEPSWORKOUT</option>
                                <option>TRICEPSWORKOUT</option>
                                <option>ABSWORKOUT</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Number of Reps</label>
                            <input
                                className="form-control"
                                type="number"
                                placeholder="number of total repetitions performed"
                                value={workoutDetails.noOfReps}
                                onChange={handleNoOfReps}
                            />
                        </div>
                        <div className="form-group">
                            <label >Day of Week</label>
                            <select class="form-control" value={workoutDetails.dayOfWeek} onChange={handleDayOfWeek}>
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
                            <label>Calories Burned</label>
                            <input
                                className="form-control"
                                type="number"
                                placeholder="Total Calories you burned"
                                value={workoutDetails.caloriesBurned}
                                onChange={handleCaloriesBurned}
                            />
                        </div>


                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="success" onClick={handleSubmit}>
                        Save Workout
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </>
    );
}

export default AddWorkout;

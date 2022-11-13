import React from 'react'
import Table from '../../Layout/Component/Table';

function WorkoutTable(props) {
    const columns = [
        // {
        //     dataField: "activityName",
        //     text: "Activity Description",
        // },
        // {
        //     dataField: "dayOfWeek",
        //     text: "week day"
        // },
        // {
        //     dataField: "caloriesBurned",
        //     text: "cal burned"
        // },
        {
            dataField: "workoutType",
            text: "Workout Type",
        },
        {
            dataField: "noOfReps",
            text: "No of Reps",
        },

    ]

    return (
        <div>
            {console.log(props.data)}
            < Table id="activityId" columns={columns} data={props.data} />
        </div>
    )
}

export default WorkoutTable;
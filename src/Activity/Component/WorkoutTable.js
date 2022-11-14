import React from 'react'
import Table from '../../Layout/Component/Table';
import BootstrapTable from 'react-bootstrap-table-next'

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
        {/* < Table id="activityId" columns={columns} data={props.data} /> */}
        <BootstrapTable 
        keyField="activityId" 
        data={props.data} 
        columns={columns}
        hover
       />
        </div>
    )
}

export default WorkoutTable;
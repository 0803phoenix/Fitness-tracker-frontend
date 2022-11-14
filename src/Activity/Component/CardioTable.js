import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import Table from '../../Layout/Component/Table';
import WorkoutTable from './WorkoutTable';

function CardioTable(props) {
    const columns = [
        // {
        //     dataField: "activityName",
        //     text: "Activity Type",
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
            dataField: "cardioType",
            text: "Type of Cardio",
        },
        {
            dataField: "distance",
            text: "Distance Covered"
        },
        {
            dataField: "timeInMinutes",
            text: "Time taken"
        },
    ]


    const cardioActivities = [];
    const workoutActivities = [];

    return (
        <>
            {/* {props.activityName === "CARDIO" ? <CardioTable /> : <WorkoutTable />} */}


            {/* {props.data.map((item) => { (item.cardioType != null) ? cardioActivities.add(item) : workoutActivities.add(item) })}; */}

            {/* {props.data.activityName === "CARDIO" ? console.log(props.data.activityName) : <WorkoutTable />} */}
            {console.log(props.data)}

            <BootstrapTable 
        keyField="activityId" 
        data={props.data} 
        columns={columns}
        hover
       />

        </>
    )
}

export default CardioTable;
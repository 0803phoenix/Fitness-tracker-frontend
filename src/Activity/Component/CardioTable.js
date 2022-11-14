import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
// import Table from '../../Layout/Component/Table';
import WorkoutTable from './WorkoutTable';
import DeleteService from '../Service/DeleteService'
function CardioTable(props) {
    let service = new DeleteService();
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
        {
            formatter: (cellContent, row) => {
                return (
                    <button
                        className="btn btn-danger btn-xs"
                        onClick={() => handleDelete(row.activityId)}
                    >
                        Delete
                    </button>
                );
            },
            editable: false
        }
    ]

    const handleDelete = (activityId) => {
        console.log(activityId);
        service.deleteActivityById(activityId).then(() => {
            // console.log(username+ "user Deleted");
            window.location.reload();
        })
    };


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
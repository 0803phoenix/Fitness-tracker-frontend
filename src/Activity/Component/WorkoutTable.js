import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import Table from '../../Layout/Component/Table';
import DeleteService from '../Service/DeleteService'

function WorkoutTable(props) {
    let service = new DeleteService();
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

    return (
        <div>
            {console.log(props.data)}

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
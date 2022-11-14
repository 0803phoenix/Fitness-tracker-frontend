import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import DeleteService from '../Service/DeleteService'
function CardioTable(props) {
    let service = new DeleteService();
    const columns = [
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
    
            window.location.reload();
        })
    };

    return (
        <>
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